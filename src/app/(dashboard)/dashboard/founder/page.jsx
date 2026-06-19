import DashboardChart from "@/components/dashboard/chartsCard/DashboardChart";
import DashboardStatsCard from "@/components/dashboard/statsCard/DashboardStatsCard";

const founderStats = [
	{
		title: "Total Opportunities",
		value: 24,
		icon: "opportunity",
		change: "+12%",
	},
	{
		title: "Applications",
		value: 184,
		icon: "applications",
		change: "+8%",
	},
	{
		title: "Team Members",
		value: 12,
		icon: "users",
	},
];

const applicationData = [
	{ month: "Jan", applications: 12 },
	{ month: "Feb", applications: 19 },
	{ month: "Mar", applications: 25 },
	{ month: "Apr", applications: 31 },
	{ month: "May", applications: 40 },
	{ month: "Jun", applications: 52 },
];

const opportunityData = [
	{ name: "Frontend", count: 12 },
	{ name: "Backend", count: 8 },
	{ name: "UI/UX", count: 5 },
	{ name: "Marketing", count: 7 },
];

const startupCategoryData = [
	{ name: "SaaS", value: 35 },
	{ name: "FinTech", value: 25 },
	{ name: "EdTech", value: 20 },
	{ name: "HealthTech", value: 20 },
];

export default function FounderDashboardPage() {
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

				<div className="mt-10 grid gap-6 lg:grid-cols-2">
					<DashboardChart
						title="Application Trends"
						description="Last 6 months applications"
						type="line"
						data={applicationData}
						dataKey="applications"
						xAxisKey="month"
					/>

					<DashboardChart
						title="Opportunity Categories"
						description="Current openings"
						type="bar"
						data={opportunityData}
						dataKey="count"
						xAxisKey="name"
					/>
				</div>

				{/* <div className="mt-6">
					<DashboardChart
						title="Startup Categories"
						description="Distribution by industry"
						type="pie"
						data={startupCategoryData}
						dataKey="value"
						xAxisKey="name"
					/>
				</div> */}
			</div>
		</div>
	);
}
