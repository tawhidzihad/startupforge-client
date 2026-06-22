"use client";

import { Button } from "@heroui/react";
import { Check, X } from "lucide-react";
import DeleteStartupDialog from "./DeleteStartupDialog";

export default function StartupCard({
	startup,
	handleApprove,
	handleReject,
	handleDelete,
}) {
	return (
		<div className="rounded-3xl border border-zinc-200 bg-background p-5 shadow-sm dark:border-zinc-800">
			<div>
				<h3 className="font-semibold">
					Startup Name: {startup.startupName}
				</h3>

				<p className="text-sm text-zinc-500">
					Industry: {startup.industry}
				</p>
			</div>

			<div className="mt-4 space-y-2 text-sm">
				<p>
					<span className="font-medium">Founder:</span>{" "}
					{startup.founderName}
				</p>

				<p>
					<span className="font-medium">Email:</span>{" "}
					{startup.founderEmail}
				</p>

				<p>
					<span className="font-medium">Status:</span>{" "}
					<span className="capitalize">{startup.status}</span>
				</p>
			</div>

			<div className={`mt-5 flex items-center gap-3`}>
				{startup.status === "pending" && (
					<>
						<Button
							onClick={() => handleApprove(startup)}
							className="rounded bg-green-500 text-white"
						>
							<Check size={16} />
						</Button>

						<Button
							onClick={() => handleReject(startup)}
							className="rounded bg-yellow-500 text-white"
						>
							<X size={16} />
						</Button>
					</>
				)}

				<DeleteStartupDialog
					startupName={startup.startupName}
					onDelete={() => handleDelete(startup)}
				/>
			</div>
		</div>
	);
}
