import { FileSearch } from "lucide-react";

export default function EmptyApplicationsState() {
	return (
		<div className="w-full h-screen flex justify-center items-center">
			<div className="flex min-h-87.5 w-6xl flex-col items-center justify-center rounded-3xl border border-dashed border-zinc-300 bg-background p-8 text-center dark:border-zinc-700">
				<div className="mb-4 rounded-3xl bg-violet-500/10 p-5 text-violet-500">
					<FileSearch size={40} />
				</div>

				<h3 className="text-2xl font-bold">No Applications Yet</h3>

				<p className="mt-2 max-w-md text-zinc-500">
					You haven&apos;t received any applications for your opportunities
					yet.
				</p>
			</div>
		</div>
	);
}
