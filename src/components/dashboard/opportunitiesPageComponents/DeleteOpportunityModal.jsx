"use client";

import { deleteOpportunity } from "@/lib/actions/opportunities";
import { AlertDialog, Button } from "@heroui/react";
import { Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function DeleteOpportunityModal({ opportunity }) {
	const router = useRouter();

	const handleOppotunity = async () => {
		const data = await deleteOpportunity(opportunity?._id);

		if (data.deletedCount) {
			toast.success("Opportunity deleted successfully!");
			router.refresh();
		}
	};

	return (
		<AlertDialog>
			<Button className="rounded-xl bg-red-500/10 p-3 text-red-500">
				<Trash2 size={20} />
			</Button>
			<AlertDialog.Backdrop>
				<AlertDialog.Container>
					<AlertDialog.Dialog>
						<AlertDialog.CloseTrigger />

						<AlertDialog.Header>
							<AlertDialog.Icon className="bg-red-500/10 text-red-500">
								<Trash2 className="size-5" />
							</AlertDialog.Icon>

							<AlertDialog.Heading>
								Delete Opportunity
							</AlertDialog.Heading>
						</AlertDialog.Header>

						<AlertDialog.Body>
							<p className="text-sm text-zinc-500">
								Are you sure you want to delete{" "}
								<span className="font-semibold text-foreground">
									{opportunity?.roleTitle}
								</span>
								?
							</p>

							<p className="mt-2 text-sm text-red-500">
								This action cannot be undone.
							</p>
						</AlertDialog.Body>

						<AlertDialog.Footer>
							<Button variant="ghost" slot="close">
								Cancel
							</Button>

							<Button
								variant="danger"
								slot="close"
								onClick={handleOppotunity}
							>
								Delete Now
							</Button>
						</AlertDialog.Footer>
					</AlertDialog.Dialog>
				</AlertDialog.Container>
			</AlertDialog.Backdrop>
		</AlertDialog>
	);
}
