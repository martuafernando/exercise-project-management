import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";

export function BaseLayout() {
	return (
		<div className="flex">
			<Sidebar className="w-64 bg-white shadow-lg h-screen" />
			<div className="w-full">
				<Header className="bg-white shadow px-6 py-4 z-50 relative" />
				<main className="w-full p-4">
					<Outlet />
				</main>
			</div>
		</div>
	);
}
