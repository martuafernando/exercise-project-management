import { Link, useNavigate } from "react-router-dom";
import useFormData from "../hooks/useFormData";
import api from "../utils/api";
import { useState, type FormEvent } from "react";
import { AxiosError } from "axios";

export function Register() {
	const [message, setMessage] = useState("");
	const navigate = useNavigate();
	const [formData, handleChange] = useFormData({
		name: "",
		email: "",
		password: "",
	});

	const handleSubmit = async (e: FormEvent) => {
		setMessage("");
		e.preventDefault();

		try {
			await api.post("/api/auth/register", formData);
			navigate("/login");
		} catch (e) {
			if (e instanceof AxiosError) {
				setMessage(
					e.response?.data?.message ??
						(e as Error).message ??
						"There is something wrong",
				);
			} else {
				setMessage("There is something wrong");
			}
		}
	};

	return (
		<div className="h-screen w-screen flex items-center justify-center">
			<form onSubmit={handleSubmit} className="w-80 space-y-4">
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

				<div className="h-8 overflow-auto">
					{message && <p className="text-red-700">{message}</p>}
				</div>

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
