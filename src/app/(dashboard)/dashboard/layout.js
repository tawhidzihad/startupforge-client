import DashboardSidebar from "@/components/dashboard/sidebBars/DashboardSidebar";
import MobileSidebar from "@/components/dashboard/sidebBars/MobileSidebar";
import { getUserSession } from "@/lib/core/session";

export default async function MainDashboardLayout({ children }) {
	const user = await getUserSession();

	// Founder navlinks
	const founderNavLinks = [
		{
			id: 1,
			label: "Dashboard Overview",
			href: "/dashboard/founder",
			icon: "dashboard",
		},
		{
			id: 2,
			label: "My Startup",
			href: "/dashboard/founder/startup",
			icon: "startup",
		},
		{
			id: 3,
			label: "Add Opportunity",
			href: "/dashboard/founder/opportunities/new",
			icon: "opportunity",
		},
		{
			id: 4,
			label: "Manage Opportunities",
			href: "/dashboard/founder/opportunities",
			icon: "manage",
		},
		{
			id: 5,
			label: "Applications",
			href: "/dashboard/founder/applications",
			icon: "applications",
		},
		{
			id: 6,
			label: "Profile",
			href: "/dashboard/profile",
			icon: "profile",
		},
	];

	// CollaoratorNavlinks
	const collaboratorNavLinks = [
		{
			id: 1,
			label: "Dashboard Overview",
			href: "/dashboard/collaborator",
			icon: "dashboard",
		},
		{
			id: 2,
			label: "My Applications",
			href: "/dashboard/collaborator/applications",
			icon: "applications",
		},
		{
			id: 3,
			label: "Browse Opportunities",
			// href: "/dashboard/collaborator/opportunities",
			href: "/opportunities",
			icon: "opportunities",
		},
		{
			id: 4,
			label: "Profile",
			href: "/dashboard/profile",
			icon: "profile",
		},
	];

	// Admin Nav links
	const adminNavLinks = [
		{
			id: 1,
			label: "Overview",
			href: "/dashboard/admin",
			icon: "dashboard",
		},
		{
			id: 2,
			label: "Manage Users",
			href: "/dashboard/admin/users",
			icon: "users",
		},
		{
			id: 3,
			label: "Manage Startups",
			href: "/dashboard/admin/startups",
			icon: "startup",
		},
		{
			id: 4,
			label: "Transactions",
			href: "/dashboard/admin/transactions",
			icon: "transactions",
		},
		{
			id: 5,
			label: "Profile",
			href: "/dashboard/profile",
			icon: "profile",
		},
	];

	const navlinksMap = {
		founder: founderNavLinks,
		collaborator: collaboratorNavLinks,
		admin: adminNavLinks,
	};

	const navItems = navlinksMap[user?.role || "collaborator"];
	// const navItems = navlinksMap["admin"];
	// const navItems = navlinksMap["collaborator"];

	return (
		<div className="flex min-h-screen bg-background">
			{/* Desktop sidebar */}
			<DashboardSidebar navItems={navItems} user={user} />

			<div className="flex-1 lg:ml-72">
				{/* Mobile Header & SideBar */}
				<div className="sticky top-0 z-40 flex h-16 items-center border-b bg-background px-4 lg:hidden">
					<MobileSidebar navItems={navItems} user={user} />
					<h2 className="ml-4 font-semibold">Founder Dashboard</h2>
				</div>

				<main className="p-6">{children}</main>
			</div>
		</div>
	);
}
