import { Crown } from "lucide-react";
import Link from "next/link";

export default function OpportunityLimitCard({
	currentOpportunities,
	maxOpportunities,
}) {
	const progress = (currentOpportunities / maxOpportunities) * 100;

	return (
		<div className="rounded-2xl border border-zinc-200 bg-background p-5 dark:border-zinc-800">
			<div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
				<div className="flex-1">
					<div className="mb-2 flex items-center justify-between">
						<h3 className="font-semibold">Opportunity Limit</h3>

						<span className="text-sm font-medium text-violet-500">
							{currentOpportunities}/{maxOpportunities}
						</span>
					</div>

					<div className="h-2 overflow-hidden rounded-full bg-zinc-200 dark:bg-zinc-800">
						<div
							className="h-full rounded-full bg-linear-to-r from-indigo-500 to-violet-500"
							style={{
								width: `${progress}%`,
							}}
						/>
					</div>

					<p className="mt-2 text-sm text-zinc-500">
						You can create{" "}
						<span className="font-medium text-foreground">
							{maxOpportunities - currentOpportunities}
						</span>{" "}
						more opportunities.
					</p>
				</div>

				<Link
					href="/pricing"
					className="inline-flex h-10 shrink-0 items-center justify-center gap-2 rounded-xl border border-violet-500/20 bg-violet-500/10 px-4 text-sm font-medium text-violet-500 transition-all hover:bg-violet-500/20"
				>
					<Crown size={16} />
					Upgrade
				</Link>
			</div>
		</div>
	);
}
