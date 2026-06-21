import { Info } from "lucide-react";

export default function EmptyProfileField({
	message = "No information added yet.",
}) {
	return (
		<div className="flex items-center gap-3 rounded-xl border border-dashed border-zinc-300 bg-zinc-50 p-4 dark:border-zinc-700 dark:bg-zinc-900">
			<Info size={18} className="shrink-0 text-zinc-400" />

			<p className="text-sm text-zinc-500">{message}</p>
		</div>
	);
}
