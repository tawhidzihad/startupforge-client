import { redirect } from "next/navigation";

import { getUserSession } from "@/lib/core/session";

const AllDashboardLayout = async ({ children }) => {
	const user = await getUserSession();

	// Not Logged In
	if (!user) {
		redirect("/signin");
	}

	return <>{children}</>;
};

export default AllDashboardLayout;
