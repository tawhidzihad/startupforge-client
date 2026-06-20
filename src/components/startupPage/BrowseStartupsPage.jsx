"use client";

import { motion } from "motion/react";
import { useMemo, useState } from "react";

import StartupCard from "../startupCard/StartupCard";
import StartupFilter from "./StartupFilter";
import StartupSearchBar from "./StartupSearchBar";

import { fadeInUp } from "@/lib/motion";
import EmptyStartupState from "./EmptyStartupState";

export default function BrowseStartupsPage({ startups }) {
	const [sort, setSort] = useState("newest");
	const [currentPage, setCurrentPage] = useState(1);
	const itemsPerPage = 9;

	const filteredData = useMemo(() => {
		let data = [...startups];

		if (sort === "newest") {
			data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
		}

		if (sort === "oldest") {
			data.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
		}

		return data;
	}, [startups, sort]);

	const totalPages = Math.ceil(filteredData.length / itemsPerPage);

	const paginatedData = filteredData.slice(
		(currentPage - 1) * itemsPerPage,
		currentPage * itemsPerPage,
	);

	return (
		<section className="py-20">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-0">
				{/* Header */}
				<motion.div
					{...fadeInUp}
					className="mx-auto mb-12 max-w-3xl text-center"
				>
					<div className="mb-4 inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-2 text-sm font-medium text-violet-500">
						🚀 Browse Startups
					</div>

					<h1 className="text-4xl font-bold tracking-tight md:text-5xl">
						Discover Innovative
						<span className="bg-linear-to-r from-indigo-500 via-violet-500 to-fuchsia-500 bg-clip-text text-transparent">
							{" "}
							Startups
						</span>
					</h1>

					<p className="mt-4 text-zinc-600 dark:text-zinc-400">
						Explore promising startup ideas, connect with founders and
						join exciting teams.
					</p>
				</motion.div>

				{/* Search & Filter */}
				<motion.div
					{...fadeInUp}
					className="mb-10 rounded-3xl border border-zinc-200 bg-white p-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-900"
				>
					<div className="flex flex-col gap-4 lg:flex-row">
						<div className="flex-1">
							<StartupSearchBar />
						</div>

						<div className="w-full lg:w-56">
							<StartupFilter
								sort={sort}
								setSort={(value) => {
									setSort(value);
									setCurrentPage(1);
								}}
							/>
						</div>
					</div>
				</motion.div>

				{/* Results */}
				<div className="mb-8 flex items-center justify-between">
					<p className="text-sm text-zinc-500">
						Showing{" "}
						<span className="font-semibold text-violet-500">
							{paginatedData.length}
						</span>{" "}
						of{" "}
						<span className="font-semibold">{filteredData.length}</span>{" "}
						startups
					</p>
				</div>

				{/* Grid */}
				{paginatedData.length > 0 ? (
					<div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
						{paginatedData.map((startup) => (
							<StartupCard key={startup._id} startup={startup} />
						))}
					</div>
				) : (
					<EmptyStartupState />
				)}

				{/* Pagination */}
				{totalPages > 1 && (
					<div className="mt-12 flex flex-wrap items-center justify-center gap-2">
						<button
							onClick={() =>
								setCurrentPage((prev) => Math.max(prev - 1, 1))
							}
							disabled={currentPage === 1}
							className="rounded-xl border border-zinc-200 px-4 py-2 text-sm font-medium transition-all disabled:cursor-not-allowed disabled:opacity-50 dark:border-zinc-800"
						>
							Previous
						</button>

						{Array.from({ length: totalPages }, (_, index) => (
							<button
								key={index}
								onClick={() => setCurrentPage(index + 1)}
								className={`h-10 w-10 rounded-xl text-sm font-medium transition-all ${
									currentPage === index + 1
										? "bg-linear-to-r from-indigo-500 to-violet-500 text-white"
										: "border border-zinc-200 dark:border-zinc-800"
								}`}
							>
								{index + 1}
							</button>
						))}

						<button
							onClick={() =>
								setCurrentPage((prev) => Math.min(prev + 1, totalPages))
							}
							disabled={currentPage === totalPages}
							className="rounded-xl border border-zinc-200 px-4 py-2 text-sm font-medium transition-all disabled:cursor-not-allowed disabled:opacity-50 dark:border-zinc-800"
						>
							Next
						</button>
					</div>
				)}
			</div>
		</section>
	);
}
