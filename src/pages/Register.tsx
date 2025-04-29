import { Link } from "react-router-dom";
import useFormData from "../hooks/useFormData";

export function Register() {
	const [formData, handleChange] = useFormData({
		name: "",
		email: "",
		password: "",
	});

	const handleRegister = () => {};

	return (
		<div className="h-screen w-screen flex items-center justify-center">
			<form onSubmit={handleRegister} className="w-80 space-y-4">
				<h1 className="text-2xl font-bold mb-4">Register</h1>

				<input
					type="text"
					name="name"
          autoComplete="username"
					placeholder="Enter your name"
					value={formData.name}
					onChange={(e) => handleChange(e)}
					className="border p-2 w-full rounded"
					required
				/>

				<input
					type="email"
					name="email"
          autoComplete="email"
					placeholder="Enter your email"
					value={formData.email}
					onChange={(e) => handleChange(e)}
					className="border p-2 w-full rounded"
					required
				/>

				<input
					type="password"
					name="password"
          autoComplete="current-password"
					placeholder="Enter password"
					value={formData.password}
					onChange={(e) => handleChange(e)}
					className="border p-2 w-full rounded"
					required
				/>

				<button
					type="submit"
					className="bg-orange-500 text-white p-2 w-full rounded"
				>
					Register
				</button>

				<p className="text-center">
					Already have an account?{" "}
					<Link to="/login" className="text-orange-500">
						Login
					</Link>
				</p>
			</form>
		</div>
	);
}
