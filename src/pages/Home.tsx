import { useEffect } from "react";
import { Link } from "react-router-dom";
import useProjectsStore from "../stores/projectsStore";

export function Home() {
	const { loading, projects, fetchProjects } = useProjectsStore();

	useEffect(() => {
		fetchProjects();
	}, [fetchProjects]);

	if (loading) {
		return <div>Loading project</div>;
	}

	return (
		<div>
			<h1 className="text-2xl font-bold mb-6">Active Projects</h1>

			{!projects || projects?.length === 0 ? (
				<p>No projects found.</p>
			) : (
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{projects.map((project) => (
						<Link
							key={project.id}
							to={`/projects/${project.id}`}
							className="p-4 bg-white rounded shadow hover:shadow-md transition"
						>
							<h2 className="text-lg font-semibold">{project.name}</h2>
							<p className="text-gray-500">
								{project.description || "No description"}
							</p>
							<div className="mt-2 text-sm text-gray-400">
								{new Date(project.startDate).toLocaleDateString()} -{" "}
								{new Date(project.endDate).toLocaleDateString()}
							</div>
						</Link>
					))}
				</div>
			)}
		</div>
	);
}
