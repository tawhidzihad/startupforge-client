import { SearchX } from "lucide-react";

export default function EmptyStartupState() {
	return (
		<div className="flex min-h-100 flex-col items-center justify-center rounded-3xl border border-dashed border-zinc-300 bg-background p-8 text-center dark:border-zinc-700">
			<div className="mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-violet-500/10 text-violet-500">
				<SearchX size={40} />
			</div>

			<h2 className="text-3xl font-bold">No Startups Found</h2>

			<p className="mt-3 max-w-lg text-zinc-500">
				We couldn&apos;t find any startups matching your search or filter.
				Try adjusting your criteria and explore more opportunities.
			</p>
		</div>
	);
}
