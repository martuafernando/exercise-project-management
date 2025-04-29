import { Link, useNavigate } from "react-router-dom";
import useFormData from "../hooks/useFormData";
import { type FormEvent, useState } from "react";
import api from "../utils/api";
import { AxiosError } from "axios";
import useAuthStore from "../stores/authStore";
import type User from "../domains/User";

export function Login() {
	const [message, setMessage] = useState("");
	const { setToken, setUser } = useAuthStore();
	const navigate = useNavigate();
	const [formData, handleChange] = useFormData({
		email: "",
		password: "",
	});

	const handleLogin = async (e: FormEvent) => {
		setMessage("");
		e.preventDefault();

		try {
			const response = await api.post("/api/auth/login", formData);
			const data = response.data;

			setToken(data.accessToken);
			setUser(data.user as User);

			navigate("/");
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
		<div className="w-screen h-screen flex items-center justify-center">
			<form onSubmit={handleLogin} className="w-80 space-y-4">
				<h1 className="text-2xl font-bold mb-4">Login</h1>

				{message && (
					<p className="bg-red-700 text-white p-4 rounded">{message}</p>
				)}

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
