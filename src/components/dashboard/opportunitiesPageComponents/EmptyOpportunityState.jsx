import { BriefcaseBusiness, Plus } from "lucide-react";
import Link from "next/link";

export default function EmptyOpportunityState() {
	return (
		<div className=" grid min-h-[calc(100vh-180px)] place-items-center rounded-3xl border border-dashed border-zinc-300 bg-background p-6 dark:border-zinc-700">
			<div className="mx-auto max-w-2xl text-center">
				{/* Icon */}
				<div className=" mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-3xl bg-violet-500/10 text-violet-500">
					<BriefcaseBusiness size={48} />
				</div>

				{/* Heading */}
				<h1 className="text-4xl font-bold">No Opportunities Found</h1>

				<p className="mx-auto mt-4 max-w-xl leading-7 text-zinc-500">
					You haven&apos;t created any opportunities yet. Add your first
					opportunity and start attracting talented collaborators to join
					your startup.
				</p>

				{/* Button */}
				<Link
					href="/dashboard/founder/opportunities/new"
					className=" mt-8 inline-flex h-12 items-center gap-2 rounded-xl bg-linear-to-r from-indigo-500 to-violet-500 px-6 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
				>
					<Plus size={18} />
					Add Opportunity
				</Link>

				{/* Features */}
				<div className="mt-12 flex flex-wrap items-center justify-center gap-3">
					<span className="rounded-full border border-zinc-200 px-4 py-2 text-sm text-zinc-500 dark:border-zinc-800">
						Post Roles
					</span>

					<span className="rounded-full border border-zinc-200 px-4 py-2 text-sm text-zinc-500 dark:border-zinc-800">
						Find Talent
					</span>

					<span className="rounded-full border border-zinc-200 px-4 py-2 text-sm text-zinc-500 dark:border-zinc-800">
						Grow Your Team
					</span>
				</div>
			</div>
		</div>
	);
}
