import { redirect } from "next/navigation";

import { getUserSession } from "@/lib/core/session";

const AllDashboardLayout = async ({ children }) => {
	const user = await getUserSession();

	// Not Logged In
	if (!user) {
		redirect("/signin");
	}

	// Blocked User
	if (user?.isBlocked) {
		redirect("/account-blocked");
	}

	return <>{children}</>;
};

export default AllDashboardLayout;
