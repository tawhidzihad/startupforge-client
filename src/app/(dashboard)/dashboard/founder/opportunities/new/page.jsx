import AddOpportunityForm from "@/components/dashboard/opportunitiesPageComponents/AddOpportunityForm";
import OpportunityLimitCard from "@/components/dashboard/opportunitiesPageComponents/applyPageComponents/OpportunityLimitCard";
import OpportunityLimitReachedState from "@/components/dashboard/opportunitiesPageComponents/applyPageComponents/OpportunityLimitReachedState";
import NoStartupFoundForOpportunity from "@/components/dashboard/opportunitiesPageComponents/NoStartupFoundForOpportunity";

import StartupPendingState from "@/components/dashboard/opportunitiesPageComponents/StartupPendingState";

import { getUserSession } from "@/lib/core/session";
import { getAllMyOpportunities } from "@/lib/fetchings/opportunities";
import { getPlan } from "@/lib/fetchings/plan";
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

	// Current Plan
	const plan = await getPlan(user?.plan || "founder_free");

	// Total Opportunities
	const opportunities = await getAllMyOpportunities(user?.id);

	// Limit Reached
	if (opportunities.length >= plan.limit) {
		return (
			<OpportunityLimitReachedState
				currentOpportunities={opportunities.length}
				limit={plan.limit}
			/>
		);
	}

	return (
		<section className="space-y-4 py-5">
			{/* Limit Card */}
			<OpportunityLimitCard
				currentOpportunities={opportunities.length}
				maxOpportunities={plan.limit}
			/>

			{/* Form */}
			<AddOpportunityForm user={user} startupData={startupData} />
		</section>
	);
};

export default AddOpportunityPage;
