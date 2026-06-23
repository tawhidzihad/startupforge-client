import { requireRole } from "@/lib/core/session";

const CollaboratorDashboardLayout = async ({ children }) => {
	await requireRole("collaborator");
	return children;
};

export default CollaboratorDashboardLayout;
