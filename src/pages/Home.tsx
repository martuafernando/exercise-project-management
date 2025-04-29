import useAuthStore from "../stores/authStore";

export function Home() {
	const { user } = useAuthStore();

	return (
		<div>
			<p>{user?.name}</p>
		</div>
	);
}
