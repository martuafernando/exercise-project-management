import { useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin =  () => { };

  return (
    <div className="flex items-center justify-center">
      <form onSubmit={handleLogin} className="w-80 space-y-4">
        <h1 className="text-2xl font-bold mb-4">Login</h1>

        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-2 w-full rounded"
          required
        />

        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border p-2 w-full rounded"
          required
        />

        <button
          type="submit"
          className="bg-orange-500 text-white p-2 w-full rounded"
        >
          Login
        </button>

        <p className="text-center">
          Don't have an account?{" "}
          <Link to="/register" className="text-orange-500">
            Register now
          </Link>
        </p>
      </form>
    </div>
  );
}