import ManageStartupsTable from "@/components/dashboard/adminPageComponents/ManageStartupsTable";
import { getAllStartups } from "@/lib/fetchings/startups";

const ManageStartupsPage = async () => {
	const startups = await getAllStartups();

	return (
		<>
			<ManageStartupsTable startups={startups}></ManageStartupsTable>
		</>
	);
};

export default ManageStartupsPage;
