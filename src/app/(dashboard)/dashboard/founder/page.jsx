import DashboardChart from "@/components/dashboard/chartsCard/DashboardChart";
import DashboardStatsCard from "@/components/dashboard/statsCard/DashboardStatsCard";

import { getUserSession } from "@/lib/core/session";
import { getApplications } from "@/lib/fetchings/applications";
import { getAllMyOpportunities } from "@/lib/fetchings/opportunities";

export default async function FounderDashboardPage() {
	const user = await getUserSession();

	const allMyOpportunity = await getAllMyOpportunities(user?.id);

	const applications = await getApplications({
		founderId: user?.id,
	});

	const acceptedMembersNumber = applications.filter(
		(application) => application.status === "accepted",
	).length;

	/* Stats Cards */
	const founderStats = [
		{
			title: "Total Opportunities",
			value: allMyOpportunity.length,
			icon: "opportunity",
		},
		{
			title: "Applications",
			value: applications.length,
			icon: "applications",
		},
		{
			title: "Accepted Members",
			value: acceptedMembersNumber,
			icon: "users",
		},
	];

	/* Chart Data */
	const founderOverviewData = [
		{
			name: "Opportunities",
			total: allMyOpportunity.length,
		},
		{
			name: "Applications",
			total: applications.length,
		},
		{
			name: "Accepted",
			total: acceptedMembersNumber,
		},
	];

	return (
		<div className="space-y-8">
			{/* Header */}
			<div>
				<h1 className="text-3xl font-bold">Dashboard Overview</h1>

				<p className="mt-2 text-zinc-500">
					Track your startup growth, opportunities, and team applications.
				</p>
			</div>

			{/* Stats Cards */}
			<div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
				{founderStats.map((stat) => (
					<DashboardStatsCard key={stat.title} {...stat} />
				))}
			</div>

			{/* Analytics */}
			<DashboardChart
				title="Recruitment Overview"
				description="Compare opportunities, applications and accepted members."
				type="bar"
				data={founderOverviewData}
				dataKey="total"
				xAxisKey="name"
			/>
		</div>
	);
}
