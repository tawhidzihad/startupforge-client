import CollaboratorApplicatoinTable from "@/components/dashboard/collaboratorApplicationPageComponents/CollaboratorApplicatoinTable";
import { getUserSession } from "@/lib/core/session";
import { getApplications } from "@/lib/fetchings/applications";

const CollaboratorApplicationPage = async () => {
	const user = await getUserSession();
	const applications = await getApplications({
		applicantId: user?.id,
	});

	return (
		<>
			<CollaboratorApplicatoinTable
				applications={applications}
			></CollaboratorApplicatoinTable>
		</>
	);
};

export default CollaboratorApplicationPage;
