import { Link } from "react-router-dom";
import useFormData from "../hooks/useFormData";

export function Login() {
	const [formData, handleChange] = useFormData({
		email: "",
		password: "",
	});

	const handleLogin = () => {};

	return (
		<div className="w-screen h-screen flex items-center justify-center">
			<form onSubmit={handleLogin} className="w-80 space-y-4">
				<h1 className="text-2xl font-bold mb-4">Login</h1>

				<input
					type="email"
          name="email"
					placeholder="Enter your email"
					value={formData.email}
					onChange={(e) => handleChange(e)}
					className="border p-2 w-full rounded"
					required
				/>

				<input
					type="password"
					placeholder="Enter password"
          autoComplete="current-password"
          name="password"
					value={formData.password}
					onChange={(e) => handleChange(e)}
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
