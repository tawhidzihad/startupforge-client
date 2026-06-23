import { getUserSession } from "@/lib/core/session";
import { getMyStartups } from "@/lib/fetchings/startups";
import StartupSection from "./StartupSection";

const MyStartupPage = async () => {
	const user = await getUserSession();
	const startupData = await getMyStartups(user?.email);
	console.log(startupData);

	return (
		<>
			<StartupSection startupData={startupData} user={user}></StartupSection>
		</>
	);
};

export default MyStartupPage;
