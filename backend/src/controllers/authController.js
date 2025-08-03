import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { supabase } from "../utilis/supabaseClient.js";

// Register User
export const registerUser = async (req, res) => {
  const { first_name, last_name, username, email, password } = req.body;

  if (!first_name || !last_name || !username || !email || !password) {
    return res.status(400).json({ message: 'All fields are required.' });
  }

  // Check for duplicate email or username
  const { data: existingUser, error: fetchError } = await supabase
    .from('users')
    .select('*')
    .or(`email.eq.${email},username.eq.${username}`)
    .maybeSingle();

  if (existingUser) {
    return res.status(409).json({ message: 'Email or Username already exists.' });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const { error } = await supabase.from('users').insert([
    {
      first_name,
      last_name,
      username,
      email,
      password: hashedPassword,
    },
  ]);

  if (error) {
    return res.status(500).json({ message: 'Failed to register user.' });
  }

  return res.status(201).json({ message: 'User registered successfully.' });
};


// Login User
export const loginUser = async (req, res) => {
  const { identifier, password } = req.body;

  if (!identifier || !password) {
    return res.status(400).json({ message: 'Identifier and password required.' });
  }

  const { data: user, error } = await supabase
    .from('users')
    .select('*')
    .or(`email.eq.${identifier},username.eq.${identifier}`)
    .maybeSingle();

  if (!user) {
    return res.status(401).json({ message: 'Invalid credentials.' });
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    return res.status(401).json({ message: 'Invalid credentials.' });
  }

  const token = jwt.sign({ id: user.id, username: user.username }, process.env.JWT_SECRET, {
    expiresIn: '7d',
  });

  return res.status(200).json({
    message: 'Login successful.',
    token,
    user: {
      id: user.id,
      first_name: user.first_name,
      last_name: user.last_name,
      username: user.username,
      email: user.email,
    },
  });
};