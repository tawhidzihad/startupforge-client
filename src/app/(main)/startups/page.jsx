import BrowseStartupsPage from "@/components/startupPage/BrowseStartupsPage";
import { getAllStartups } from "@/lib/fetchings/startups";

const StartupsPage = async ({ searchParams }) => {
	const { search } = await searchParams;
	const startups = await getAllStartups(search);

	return (
		<>
			<BrowseStartupsPage startups={startups}></BrowseStartupsPage>
		</>
	);
};

export default StartupsPage;
