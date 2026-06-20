"use client";

import { Calendar } from "lucide-react";
import DeleteOpportunityModal from "./DeleteOpportunityModal";
import OpportunityEditModal from "./OpportunityEditModal";

export default function FounderOpportunityCard({ opportunity }) {
	return (
		<div className="rounded-3xl border border-zinc-200 bg-background p-6 shadow-sm dark:border-zinc-800">
			<div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
				<div>
					<h3 className="text-xl font-semibold">
						{opportunity.roleTitle}
					</h3>

					<div className="mt-3 flex flex-wrap gap-2">
						<span className="rounded-full bg-violet-500/10 px-3 py-1 text-sm text-violet-500">
							{opportunity.workType}
						</span>

						<span className="rounded-full bg-indigo-500/10 px-3 py-1 text-sm text-indigo-500">
							{opportunity.commitmentLevel}
						</span>
					</div>
				</div>

				<div className="flex gap-2">
					<OpportunityEditModal
						opportunity={opportunity}
					></OpportunityEditModal>

					<DeleteOpportunityModal
						opportunity={opportunity}
					></DeleteOpportunityModal>
				</div>
			</div>

			<div className="mt-5">
				<p className="mb-2 text-sm font-medium">Required Skills</p>

				<div className="flex flex-wrap gap-2">
					{opportunity.requiredSkills?.map((skill) => (
						<span
							key={skill}
							className="rounded-lg border px-3 py-1 text-sm"
						>
							{skill}
						</span>
					))}
				</div>
			</div>

			<div className="mt-5 flex items-center gap-2 text-sm text-zinc-500">
				<Calendar size={16} />
				Deadline: {opportunity.deadline}
			</div>
		</div>
	);
}
