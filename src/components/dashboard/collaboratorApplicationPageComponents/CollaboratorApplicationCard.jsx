"use client";

import { Chip } from "@heroui/react";

export default function CollaboratorApplicationCard({ application }) {
	return (
		<div className="rounded-3xl border border-zinc-200 bg-background p-5 shadow-sm dark:border-zinc-800">
			<div className="flex items-start justify-between gap-3">
				<div>
					<h3 className="font-semibold">
						{application.opportunityRoleTitle}
					</h3>

					<p className="mt-1 text-sm text-zinc-500">
						{application.startupName}
					</p>
				</div>

				<Chip
					size="sm"
					className="capitalize"
					color={
						application.status === "accepted"
							? "success"
							: application.status === "rejected"
								? "danger"
								: "warning"
					}
				>
					{application.status}
				</Chip>
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
		</div>
	);
}
