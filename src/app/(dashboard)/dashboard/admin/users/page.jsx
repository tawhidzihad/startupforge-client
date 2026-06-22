import ManageUsersTable from "@/components/dashboard/adminPageComponents/ManageUsersTable";
import { getAllUsers } from "@/lib/fetchings/users";

const ManageUsersPage = async () => {
	const users = await getAllUsers();

	return (
		<>
			<ManageUsersTable users={users}></ManageUsersTable>
		</>
	);
};

export default ManageUsersPage;
