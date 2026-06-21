"use client";

import { updateApplicationStatus } from "@/lib/actions/applications";
import { Check, X } from "lucide-react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function ApplicationCard({ application }) {
	const router = useRouter();

	const handleApprove = async (id) => {
		const updatedStatus = {
			status: "accepted",
		};
		const data = await updateApplicationStatus(id, updatedStatus);
		if (data.modifiedCount) {
			router.refresh();
			toast.success("Application accepted successfully!");
		}
	};

	const handleReject = async (id) => {
		const updatedStatus = {
			status: "rejected",
		};
		const data = await updateApplicationStatus(id, updatedStatus);
		if (data.modifiedCount) {
			router.refresh();
			toast.success("The application has been rejected.");
		}
	};

	return (
		<div className="rounded-3xl border border-zinc-200 bg-background p-5 shadow-sm dark:border-zinc-800">
			<div className="flex items-start justify-between">
				<div>
					<h3 className="font-semibold">
						Name: {application.applicantName}
					</h3>

					<p className="text-sm text-zinc-500">
						Email: {application.applicantEmail}
					</p>

					{/* Applied Role */}
					<div className="mt-3">
						<span className="inline-flex rounded bg-violet-500/10 px-3 py-1 text-xs font-medium text-violet-500">
							Applied For: {application.opportunityRoleTitle}
						</span>
					</div>
				</div>

				{/* Status */}
				<span
					className={`rounded-full capitalize px-3 py-1 text-xs font-medium ${
						application.status === "accepted"
							? "bg-green-500/10 text-green-500"
							: application.status === "rejected"
								? "bg-red-500/10 text-red-500"
								: "bg-yellow-500/10 text-yellow-500"
					}`}
				>
					{application.status}
				</span>
			</div>

			{/* Applied Data */}
			<p className="mt-4 text-sm text-zinc-500">
				Applied:{" "}
				{new Date(application.createdAt).toLocaleString("en-US", {
					month: "long",
					day: "numeric",
					year: "numeric",
					hour: "numeric",
					minute: "2-digit",
					hour12: true,
				})}
			</p>

			{application.status === "pending" && (
				<div className="mt-5 flex gap-3">
					<button
						onClick={() => handleApprove(application?._id)}
						className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-green-500 py-2 text-white"
					>
						<Check size={16} />
						Accept
					</button>

					<button
						onClick={() => handleReject(application?._id)}
						className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-red-500 py-2 text-white"
					>
						<X size={16} />
						Reject
					</button>
				</div>
			)}
		</div>
	);
}
