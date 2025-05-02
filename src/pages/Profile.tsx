import { useEffect, useState } from "react";
import useAuthStore from "../stores/authStore";
import api from "../utils/api";
import type User from "../domains/User";

export function Profile() {
	const [user, setUser] = useState<User|null>(null);

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
	}, []);

	if (!user) {
		return (
			<div className="max-w-2xl mx-auto">
				<p>Loading</p>
			</div>
		)
	}

	return (
		<div className="max-w-2xl mx-auto">
			<h1 className="text-2xl font-bold mb-6">Profile</h1>

			<div className="bg-white rounded-lg shadow p-6">
				<div className="space-y-4">
					<div>
						<p className="block text-sm font-medium text-gray-700">Name</p>
						<p className="mt-1 text-lg">{user.name}</p>
					</div>

					<div>
						<p className="block text-sm font-medium text-gray-700">Email</p>
						<p className="mt-1 text-lg">{ user.email }</p>
					</div>
				</div>
			</div>
		</div>
	);
}
