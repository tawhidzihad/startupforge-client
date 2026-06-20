import EmptyOpportunityState from "@/components/dashboard/opportunitiesPageComponents/EmptyOpportunityState";
import FounderOpportunityCard from "@/components/dashboard/opportunitiesPageComponents/FounderOpportunityCard";

export default function OpportunitySection({ opportunities }) {
	if (!opportunities?.length) {
		return <EmptyOpportunityState />;
	}

	if (opportunities) {
		return (
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
				{opportunities.map((opportunity) => (
					<FounderOpportunityCard
						key={opportunity._id}
						opportunity={opportunity}
					/>
				))}
			</div>
		);
	}
}
