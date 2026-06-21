import ApplicationsTable from "@/components/dashboard/applicationsPageComponents/ApplicationsTable";
import { getUserSession } from "@/lib/core/session";
import { getApplications } from "@/lib/fetchings/applications";

const ApplicationsPage = async () => {
	const user = await getUserSession();
	const applications = await getApplications(user?.id);

	
	return (
		<>
			<ApplicationsTable applications={applications}></ApplicationsTable>
		</>
	);
};

export default ApplicationsPage;
