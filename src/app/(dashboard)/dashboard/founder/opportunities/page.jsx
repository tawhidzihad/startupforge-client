import { getUserSession } from "@/lib/core/session";
import { getAllMyOpportunities } from "@/lib/fetchings/opportunities";
import OpportunitySection from "./OpportunitySection";

const ManageOpportunitiesPage = async () => {
	const user = await getUserSession();
	const opportunities = await getAllMyOpportunities(user?.id);

	return (
		<>
			<OpportunitySection opportunities={opportunities}></OpportunitySection>
		</>
	);
};

export default ManageOpportunitiesPage;
