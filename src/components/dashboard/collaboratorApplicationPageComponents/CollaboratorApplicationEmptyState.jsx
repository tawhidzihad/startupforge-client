import Link from "next/link";

import { BriefcaseBusiness } from "lucide-react";

export default function CollaboratorApplicationEmptyState() {
	return (
		<div className="flex min-h-[70vh] items-center justify-center">
			<div className="w-full max-w-4xl rounded-3xl border border-dashed border-zinc-300 bg-background p-10 text-center dark:border-zinc-700">
				<div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-3xl bg-violet-500/10 text-violet-500">
					<BriefcaseBusiness size={40} />
				</div>

				<h2 className="text-3xl font-bold">No Applications Submitted</h2>

				<p className="mx-auto mt-3 max-w-lg text-zinc-500">
					You haven&apos;t applied to any opportunities yet. Explore
					startups, discover exciting roles, and submit your first
					application to start collaborating with innovative teams.
				</p>

				<Link
					href="/opportunities"
					className="mt-8 inline-flex h-12 items-center justify-center rounded-xl bg-linear-to-r from-indigo-500 to-violet-500 px-6 font-medium text-white transition-all hover:shadow-lg"
				>
					Browse Opportunities
				</Link>
			</div>
		</div>
	);
}
