import { SkeletonCard } from "../components/SkeletonCard";
import useAuthStore from "../stores/authStore";

export function Home() {
	const { user } = useAuthStore();

	return (
		<div>
			<SkeletonCard />
		</div>
	);
}
