import AddOpportunityForm from "@/components/dashboard/opportunitiesPageComponents/AddOpportunityForm";
import NoStartupFoundForOpportunity from "@/components/dashboard/opportunitiesPageComponents/NoStartupFoundForOpportunity";
import StartupPendingState from "@/components/dashboard/opportunitiesPageComponents/StartupPendingState";
import { getUserSession } from "@/lib/core/session";
import { getMyStartups } from "@/lib/fetchings/startups";

const AddOpportunityPage = async () => {
	const user = await getUserSession();
	const startupData = await getMyStartups(user?.email);

	if (!startupData) {
		return <NoStartupFoundForOpportunity />;
	}

	if (startupData.status !== "approved") {
		return <StartupPendingState />;
	}

	if (startupData) {
		return (
			<AddOpportunityForm
				user={user}
				startupData={startupData}
			></AddOpportunityForm>
		);
	}
};

export default AddOpportunityPage;
