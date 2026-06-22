import DashboardChart from "@/components/dashboard/chartsCard/DashboardChart";
import DashboardStatsCard from "@/components/dashboard/statsCard/DashboardStatsCard";
import { getUserSession } from "@/lib/core/session";
import { getApplications } from "@/lib/fetchings/applications";

const CollaboratorDashboardPage = async () => {
	const user = await getUserSession();
	const applications = await getApplications({
		applicantId: user?.id,
	});

	const totalApplications = applications.length;

	const acceptedApplications = applications.filter(
		(application) => application.status === "accepted",
	).length;

	const pendingApplications = applications.filter(
		(application) => application.status === "pending",
	).length;

	const rejectedApplications = applications.filter(
		(application) => application.status === "rejected",
	).length;

	const collaboratorStats = [
		{
			title: "Applications Sent",
			value: totalApplications,
			icon: "applications",
		},
		{
			title: "Accepted",
			value: acceptedApplications,
			icon: "success",
		},
		{
			title: "Pending",
			value: pendingApplications,
			icon: "pending",
		},
	];

	const applicationStatusData = [
		{
			name: "Pending",
			total: pendingApplications,
		},
		{
			name: "Accepted",
			total: acceptedApplications,
		},
		{
			name: "Rejected",
			total: rejectedApplications,
		},
	];

	return (
		<div className="space-y-8">
			{/* Header */}
			<div>
				<h1 className="text-3xl font-bold">Collaborator Dashboard</h1>

				<p className="mt-2 text-zinc-500">
					Track your applications and monitor your progress.
				</p>
			</div>

			{/* Stats */}
			<div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
				{collaboratorStats.map((item) => (
					<DashboardStatsCard
						key={item.title}
						title={item.title}
						value={item.value}
						icon={item.icon}
					/>
				))}
			</div>

			{/* Chart */}
			<DashboardChart
				title="Application Status"
				description="Overview of your application activity"
				type="bar"
				data={applicationStatusData}
				dataKey="total"
				xAxisKey="name"
			/>
		</div>
	);
};

export default CollaboratorDashboardPage;
