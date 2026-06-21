import Link from "next/link";

import { ArrowLeft, ShieldAlert } from "lucide-react";

export default function OwnOpportunityApplyState() {
	return (
		<div className="mx-auto max-w-7xl py-12">
			<div className="flex flex-col items-center justify-center rounded-3xl border border-zinc-200 bg-background p-8 text-center shadow-sm dark:border-zinc-800">
				{/* Icon */}
				<div className="mb-8 flex h-24 w-24 items-center justify-center rounded-3xl bg-red-500/10 text-red-500">
					<ShieldAlert size={48} />
				</div>

				{/* Content */}
				<h1 className="text-4xl font-bold tracking-tight">
					You Can&apos;t Apply Here
				</h1>

				<p className="mt-4 max-w-2xl text-lg leading-8 text-zinc-500">
					This opportunity belongs to your own startup. Founders can create
					and manage opportunities, but they cannot submit applications to
					opportunities they created themselves.
				</p>

				{/* Actions */}
				<div className="mt-10">
					<Link
						href="/opportunities"
						className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-linear-to-r from-indigo-500 to-violet-500 px-6 font-medium text-white transition-all hover:shadow-lg"
					>
						<ArrowLeft size={18} />
						Browse Other Opportunities
					</Link>
				</div>
			</div>
		</div>
	);
}
