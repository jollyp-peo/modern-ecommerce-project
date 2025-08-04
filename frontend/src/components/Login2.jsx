import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Login2() {
  const [form, setForm] = useState({ identifier: "", password: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Login failed");

      localStorage.setItem("token", data.token);
      setTimeout(()=>{
        alert("Login successful!");
        navigate('/landing-page', {replace: true});
      }, 200);
      
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white p-6 rounded-lg shadow-md space-y-4"
      >
        <h2 className="text-2xl font-bold text-center">Login</h2>

        <input
          type="text"
          placeholder="Email"
          value={form.identifier}
          onChange={(e) => setForm({ ...form, identifier: e.target.value })}
          className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Login
        </button>
        <h2>No login details, Kindly <Link to='/register'><span className="font-bold text-blue-500">Register</span></Link></h2>
      </form>
    </div>
  );
}