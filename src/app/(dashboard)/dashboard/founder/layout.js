import { requireRole } from "@/lib/core/session";

const FounderDashboardLayout = async ({ children }) => {
	await requireRole("founder");
	return children;
};

export default FounderDashboardLayout;
