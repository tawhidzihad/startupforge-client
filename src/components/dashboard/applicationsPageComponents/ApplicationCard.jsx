import { Check, X } from "lucide-react";

export default function ApplicationCard({ application, onAccept, onReject }) {
	return (
		<div className="rounded-3xl border border-zinc-200 bg-background p-5 shadow-sm dark:border-zinc-800">
			<div className="flex items-start justify-between">
				<div>
					<h3 className="font-semibold">{application.applicantName}</h3>

					<p className="text-sm text-zinc-500">
						{application.applicantEmail}
					</p>
				</div>

				<span
					className={`rounded-full px-3 py-1 text-xs font-medium ${
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
						onClick={() => onAccept(application)}
						className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-green-500 py-2 text-white"
					>
						<Check size={16} />
						Accept
					</button>

					<button
						onClick={() => onReject(application)}
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
