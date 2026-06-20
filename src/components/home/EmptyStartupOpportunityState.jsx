import { BriefcaseBusiness } from "lucide-react";

export default function EmptyStartupOpportunityState() {
	return (
		<div className="rounded-3xl border border-dashed border-zinc-300 p-10 text-center dark:border-zinc-700">
			<div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-violet-500/10 text-violet-500">
				<BriefcaseBusiness size={40} />
			</div>

			<h3 className="mt-6 text-2xl font-bold">No Opportunities Available</h3>

			<p className="mx-auto mt-3 max-w-lg text-zinc-500">
				This startup hasn&apos;t posted any opportunities yet. Check back
				later for new openings.
			</p>
		</div>
	);
}
