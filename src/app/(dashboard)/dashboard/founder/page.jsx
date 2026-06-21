import DashboardChart from "@/components/dashboard/chartsCard/DashboardChart";
import DashboardStatsCard from "@/components/dashboard/statsCard/DashboardStatsCard";
import { getUserSession } from "@/lib/core/session";
import { getApplications } from "@/lib/fetchings/applications";
import { getAllMyOpportunities } from "@/lib/fetchings/opportunities";

export default async function FounderDashboardPage() {
	const user = await getUserSession();
	const allMyOpportunity = await getAllMyOpportunities(user?.id);

	const applications = await getApplications({
		founderId: user.id,
	});

	const acceptedMembersNumber = applications.filter(
		(application) => application.status === "accepted",
	).length;

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

	const applicationStatusData = [
		{
			name: "Pending",
			total: applications.filter((app) => app.status === "pending").length,
		},
		{
			name: "Accepted",
			total: applications.filter((app) => app.status === "accepted").length,
		},
		{
			name: "Rejected",
			total: applications.filter((app) => app.status === "rejected").length,
		},
	];

	return (
		<div className="px-4 py-8 lg:px-6">
			{/* Header */}
			<div className="mb-8">
				<h1 className="text-3xl font-bold">Dashboard Overview</h1>

				<p className="mt-2 text-zinc-500">
					Track your startup growth, opportunities, and applications.
				</p>
			</div>

			{/* Stats */}
			<div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
				{founderStats.map((stat) => (
					<DashboardStatsCard key={stat.title} {...stat} />
				))}
			</div>

			{/* Charts */}
			<div className="mt-10">
				<div className="mb-5">
					<h2 className="text-2xl font-semibold">Analytics</h2>

					<p className="mt-1 text-sm text-zinc-500">
						Insights based on your startup activity.
					</p>
				</div>

				<DashboardChart
					title="Founder Overview"
					description="Startup activity overview"
					type="bar"
					data={applicationStatusData}
					dataKey="total"
					xAxisKey="name"
				/>
			</div>
		</div>
	);
}
