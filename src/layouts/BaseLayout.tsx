import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import useAuthStore from "../stores/authStore";
import { useEffect } from "react";
import api from "../utils/api";

export function BaseLayout() {
	const { setUser } = useAuthStore();

	useEffect(() => {
		const fetchUserProfile = async () => {
			try {
				const response = await api.get("/api/auth/me");
				setUser(response.data.user);
			} catch (error) {
				console.error("Failed to fetch profile", error);
			}
		};

		fetchUserProfile();
	}, [setUser]);

	return (
		<div className="flex overflow-hidden">
			<Sidebar className="w-64 bg-white shadow-lg min-h-screen" />
			<div className="w-full">
				<Header className="bg-white shadow px-6 py-4 z-50 relative" />
				<main className="w-full p-4 bg-gray-200 min-h-full">
					<Outlet />
				</main>
			</div>
		</div>
	);
}
