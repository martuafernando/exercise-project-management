import { Link } from "react-router-dom";
import { ButtonLogout } from "./ButtonLogout";

export interface SidebarProps {
	className?: string;
}

export function Sidebar(props: Readonly<SidebarProps>) {
	return (
		<aside className={`flex flex-col justify-between ${props.className}`}>
			<div>
				<div className="p-6 font-bold text-xl border-b">ProjectManager</div>

				<nav className="flex flex-col p-4 space-y-2">
					<Link to="/" className="hover:bg-gray-100 p-2 rounded">
						Dashboard
					</Link>
					<Link to="/profile" className="hover:bg-gray-100 p-2 rounded">
						Profile
					</Link>
				</nav>
			</div>

			<div className="p-4 border-t">
				<ButtonLogout className="bg-red-500 text-white rounded">
					Logout
				</ButtonLogout>
			</div>
		</aside>
	);
}
