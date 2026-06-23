import DashboardChart from "@/components/dashboard/chartsCard/DashboardChart";
import DashboardStatsCard from "@/components/dashboard/statsCard/DashboardStatsCard";
import { getAllOpportunities } from "@/lib/fetchings/opportunities";
import { getAllStartups } from "@/lib/fetchings/startups";
import { getAllSubscriptions } from "@/lib/fetchings/subscriptions";
import { getAllUsers } from "@/lib/fetchings/users";

export default async function AdminDashboardPage() {
	const users = await getAllUsers();
	const startups = await getAllStartups();
	const { pagination } = await getAllOpportunities({});
	const data = await getAllSubscriptions();

	const totalUsers = users.length;
	const totalStartups = startups.length;
	const totalOpportunities = pagination?.total;
	const totalRevenue = Number(data?.totalRevenue || 0).toFixed(2);

	/* Stats Cards */
	const adminStats = [
		{
			title: "Total Users",
			value: totalUsers,
			icon: "users",
		},
		{
			title: "Total Startups",
			value: totalStartups,
			icon: "startup",
		},
		{
			title: "Total Opportunities",
			value: totalOpportunities,
			icon: "opportunity",
		},
		{
			title: "Total Revenue",
			value: `$${totalRevenue}`,
			icon: "transactions",
		},
	];

	/* Bar Chart Data */
	const platformOverviewData = [
		{
			name: "Users",
			total: totalUsers,
		},
		{
			name: "Startups",
			total: totalStartups,
		},
		{
			name: "Opportunities",
			total: totalOpportunities,
		},
	];

	/* Revenue Line Chart Data */
	const revenueData = data?.monthlyRevenue || [];

	return (
		<div className="space-y-8">
			{/* Header */}
			<div>
				<h1 className="text-3xl font-bold">Admin Dashboard</h1>

				<p className="mt-2 text-zinc-500">
					Monitor platform growth, users, startups, opportunities and
					revenue.
				</p>
			</div>

			{/* Stats */}
			<div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
				{adminStats.map((stat) => (
					<DashboardStatsCard key={stat.title} {...stat} />
				))}
			</div>

			{/* Analytics */}
			<div className="grid gap-6 xl:grid-cols-2">
				<DashboardChart
					title="Platform Overview"
					description="Users, startups and opportunities on the platform."
					type="bar"
					data={platformOverviewData}
					dataKey="total"
					xAxisKey="name"
				/>

				<DashboardChart
					title="Revenue Growth"
					description="Monthly revenue generated from subscriptions."
					type="line"
					data={revenueData}
					dataKey="revenue"
					xAxisKey="month"
				/>
			</div>
		</div>
	);
}
