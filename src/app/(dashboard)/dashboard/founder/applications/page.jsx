import ApplicationsTable from "@/components/dashboard/founderApplicationsPageComponents/ApplicationsTable";
import { getUserSession } from "@/lib/core/session";
import { getApplications } from "@/lib/fetchings/applications";

const FounderApplicationsPage = async () => {
	const user = await getUserSession();
	const applications = await getApplications({
		founderId: user?.id,
	});

	return (
		<>
			<ApplicationsTable applications={applications}></ApplicationsTable>
		</>
	);
};

export default FounderApplicationsPage;
