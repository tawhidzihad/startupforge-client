import TransactionsTable from "@/components/dashboard/adminPageComponents/TransactionsTable";
import { getAllSubscriptions } from "@/lib/fetchings/subscriptions";

const TransactionsPage = async () => {
	const { subscriptions } = await getAllSubscriptions();

	return (
		<>
			<TransactionsTable transactions={subscriptions}></TransactionsTable>
		</>
	);
};

export default TransactionsPage;
