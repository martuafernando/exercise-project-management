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
	redirectCondition: () => boolean;
}

function ProtectedRoute(props: Readonly<ProtectedLayoutProps>) {
	if (props.redirectCondition()) {
		return <Navigate to={props.redirectPath} replace />;
	}

	return <Outlet />;
}

export default function AppRoutes() {
	const { user } = useAuthStore();

	return (
		<BrowserRouter>
			<Routes>
				<Route
					element={
						<ProtectedRoute redirectCondition={() => !!user} redirectPath="/" />
					}
				>
					<Route path="/login" element={<Login />} />
					<Route path="/register" element={<Register />} />
				</Route>

				<Route
					element={
						<ProtectedRoute redirectCondition={() => !user} redirectPath="/login" />
					}
				>
					<Route element={<BaseLayout />}>
						<Route index element={<Home />} />
					</Route>
				</Route>
			</Routes>
		</BrowserRouter>
	);
}
