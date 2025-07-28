import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { supabase } from "../utilis/supabaseClient.js";

// Register User
export const registerUser = async (req, res) => {
  const { firstname, lastname, username, email, password } = req.body;

  
  console.log(req.body);

  //  Check if user already exists
  const { data: existingUser } = await supabase
    .from("users") //  this should be "users", not "user"
    .select("*")
    .eq("email", email)
    .single();

  if (existingUser) {
    return res.status(400).json({ message: "User already exists" });
  }

  //  Hash the password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Save new user to Supabase
  const { data, error } = await supabase.from("users").insert([
    {
      firstname,
      lastname,
      username,
      email,
      password: hashedPassword,
      role: "user",
    },
  ]);

  if (error) {
    return res.status(500).json({ message: error.message });
  }

  // Generate JWT Token
  const token = jwt.sign(
    { email, username, role: "user" },
    process.env.JWT_SECRET,
    { expiresIn: "7d" }
  );

  res.json({
    token,
    user: { firstname, lastname, username, email },
  });
};

// Login User
export const loginUser = async (req, res) => {
  const { identifier, password } = req.body;

  const { data: user, error } = await supabase
    .from("users")
    .select("*")
    .or(`email.eq.${identifier},username.eq.${identifier}`)
    .single();

  if (error || !user) {
    return res.status(400).json({ message: "User not found" });
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(400).json({ message: "Incorrect password" });
  }

  const token = jwt.sign(
    { email: user.email, username: user.username, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: "7d" }
  );

  res.json({
    token,
    user: {
      firstname: user.firstname,
      lastname: user.lastname,
      username: user.username,
      email: user.email,
    },
  });
};
