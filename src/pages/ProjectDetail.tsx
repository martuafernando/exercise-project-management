import { useParams } from "react-router-dom";
import useProjectsStore from "../stores/projectsStore";
import { useEffect } from "react";

export function ProjectDetail() {
	const { projectId } = useParams();
	const { loading, projectDetail, fetchProjectDetail } = useProjectsStore();

	useEffect(() => {
		if (projectId) {
			fetchProjectDetail(projectId);
		}
	}, [projectId, fetchProjectDetail]);

	if (loading) {
		return <div>Loading...</div>;
	}

	if (!projectDetail) {
		return <div>Project not found</div>;
	}

	return (
		<div className="p-6 bg-white rounded shadow space-y-8">
			<div>
				<h1 className="text-2xl font-bold mb-4">{projectDetail.name}</h1>

				<div className="text-gray-600 mb-2">
					<strong>Status:</strong> {projectDetail.status}
				</div>

				<div className="text-gray-600 mb-2">
					<strong>Duration:</strong>{" "}
					{new Date(projectDetail.startDate).toLocaleDateString()} -{" "}
					{new Date(projectDetail.endDate).toLocaleDateString()}
				</div>

				{projectDetail.description && (
					<div className="text-gray-600 mb-2">
						<strong>Description:</strong> {projectDetail.description}
					</div>
				)}

				<div className="text-gray-600">
					<strong>Created by:</strong>{" "}
					{projectDetail.createdBy?.name || "Unknown"}
				</div>
			</div>
		</div>
	);
}
