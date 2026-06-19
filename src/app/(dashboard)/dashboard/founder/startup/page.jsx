import MyStartupForm from "@/components/dashboard/startupPageComponents/MyStartupForm";
import { getUserSession } from "@/lib/core/session";

const MyStartupPage = async () => {
	const user = await getUserSession();
	return (
		<>
			<MyStartupForm user={user}></MyStartupForm>
		</>
	);
};

export default MyStartupPage;
