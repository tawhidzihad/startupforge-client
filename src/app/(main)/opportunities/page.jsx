import BrowseOpportunitiesPage from "@/components/opportunityPage/BrowseOpportunitiesPage";
import { getAllOpportunities } from "@/lib/fetchings/opportunities";

const OpportunitiesPage = async ({ searchParams }) => {
	const params = await searchParams;

	const opportunitiesData = await getAllOpportunities({
		search: params.search,
		workType: params.workType,
		industry: params.industry,
		page: params.page,
	});

	const opportunities = opportunitiesData.data;
	const pagination = opportunitiesData.pagination;

	return (
		<>
			<BrowseOpportunitiesPage
				opportunities={opportunities}
				pagination={pagination}
			></BrowseOpportunitiesPage>
		</>
	);
};

export default OpportunitiesPage;
