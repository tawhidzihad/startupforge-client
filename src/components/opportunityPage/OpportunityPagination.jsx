"use client";

export default function OpportunityPagination({
	currentPage,
	totalPages,
	onPageChange,
}) {
	return (
		<div className="mt-12 flex flex-wrap items-center justify-center gap-2">
			<button
				onClick={() => onPageChange(currentPage - 1)}
				disabled={currentPage === 1}
				className="rounded-xl border border-zinc-200 px-4 py-2 text-sm dark:border-zinc-800"
			>
				Previous
			</button>

			{Array.from({ length: totalPages }, (_, i) => (
				<button
					key={i}
					onClick={() => onPageChange(i + 1)}
					className={`h-10 w-10 rounded-xl ${currentPage === i + 1 ? "bg-linear-to-r from-indigo-500 to-violet-500 text-white" : "border border-zinc-200 dark:border-zinc-800"}`}
				>
					{i + 1}
				</button>
			))}

			<button
				onClick={() => onPageChange(currentPage + 1)}
				disabled={currentPage === totalPages}
				className=" rounded-xl border border-zinc-200 px-4 py-2 text-sm dark:border-zinc-800"
			>
				Next
			</button>
		</div>
	);
}
