import {
	BrowserRouter,
	Navigate,
	Outlet,
	Route,
	Routes,
} from "react-router-dom";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { Home } from "../pages/Home";
import { BaseLayout } from "../layouts/BaseLayout";
import useAuthStore from "../stores/authStore";

interface ProtectedLayoutProps {
	redirectPath: string;
}

function ProtectedLayout(props: Readonly<ProtectedLayoutProps>) {
	const { user } = useAuthStore();

	if (!user) {
		return <Navigate to={props.redirectPath} replace />;
	}

	return <Outlet />;
}

export default function AppRoutes() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />

				<Route element={<ProtectedLayout redirectPath="/login" />}>
					<Route element={<BaseLayout />}>
						<Route index element={<Home />} />
					</Route>
				</Route>
			</Routes>
		</BrowserRouter>
	);
}
