"use client";

import { useRouter, useSearchParams } from "next/navigation";

export default function OpportunityPagination({ currentPage, totalPages }) {
	const router = useRouter();
	const searchParams = useSearchParams();

	const handlePageChange = (page) => {
		const params = new URLSearchParams(searchParams);
		params.set("page", page);
		router.push(`/opportunities?${params.toString()}`);
	};

	const pages = [];

	if (totalPages <= 5) {
		for (let i = 1; i <= totalPages; i++) {
			pages.push(i);
		}
	} else {
		if (currentPage <= 3) {
			pages.push(1, 2, 3, 4, "...", totalPages);
		} else if (currentPage >= totalPages - 2) {
			pages.push(
				1,
				"...",
				totalPages - 3,
				totalPages - 2,
				totalPages - 1,
				totalPages,
			);
		} else {
			pages.push(
				1,
				"...",
				currentPage - 1,
				currentPage,
				currentPage + 1,
				"...",
				totalPages,
			);
		}
	}

	return (
		<div className="mt-12 flex flex-wrap items-center justify-center gap-2">
			<button
				onClick={() => handlePageChange(currentPage - 1)}
				disabled={currentPage === 1}
				className="rounded-xl border px-4 py-2 text-sm disabled:opacity-50"
			>
				Previous
			</button>

			{pages.map((page, index) =>
				page === "..." ? (
					<span key={index} className="px-2">
						...
					</span>
				) : (
					<button
						key={page}
						onClick={() => handlePageChange(page)}
						className={`h-10 w-10 rounded-xl ${
							currentPage === page
								? "bg-linear-to-r from-indigo-500 to-violet-500 text-white"
								: "border"
						}`}
					>
						{page}
					</button>
				),
			)}

			<button
				onClick={() => handlePageChange(currentPage + 1)}
				disabled={currentPage === totalPages}
				className="rounded-xl border px-4 py-2 text-sm disabled:opacity-50"
			>
				Next
			</button>
		</div>
	);
}
