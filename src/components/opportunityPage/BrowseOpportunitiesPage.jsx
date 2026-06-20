"use client";

import { motion } from "motion/react";

import OpportunityCard from "../opportunityCard/OpportunityCard";
import OpportunityFilter from "./OpportunityFilter";
import OpportunityPagination from "./OpportunityPagination";
import OpportunitySearch from "./OpportunitySearch";

import { fadeInUp } from "@/lib/motion";

export default function BrowseOpportunitiesPage({ opportunities, pagination }) {
	return (
		<section className="py-20">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-0">
				{/* Header */}
				<motion.div
					{...fadeInUp}
					className="mx-auto mb-12 max-w-3xl text-center"
				>
					<div className=" mb-4 inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-2 text-sm font-medium text-violet-500">
						💼 Browse Opportunities
					</div>

					<h1 className=" text-4xl font-bold tracking-tight md:text-5xl">
						Find Your Next
						<span className=" bg-linear-to-r from-indigo-500 via-violet-500 to-fuchsia-500 bg-clip-text text-transparent">
							{" "}
							Opportunity
						</span>
					</h1>

					<p className=" mt-4 text-zinc-600 dark:text-zinc-400">
						Discover exciting startup roles, find opportunities that match
						your skills and join innovative teams.
					</p>
				</motion.div>

				{/* Search + Filters */}
				<motion.div
					{...fadeInUp}
					className=" mb-10 rounded-3xl border border-zinc-200 bg-white p-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-900"
				>
					<div className="flex flex-col gap-4 lg:flex-row lg:items-center">
						<div className="flex-1">
							<OpportunitySearch />
						</div>

						<OpportunityFilter />
					</div>
				</motion.div>

				{/* Results */}
				<div className="mb-8 flex items-center justify-between">
					<p className="text-sm text-zinc-500">
						Showing{" "}
						<span className="font-semibold text-violet-500">
							{opportunities.length}
						</span>{" "}
						of <span className="font-semibold">{pagination.total}</span>{" "}
						startups
					</p>
				</div>

				{/* Grid */}
				<div className=" grid gap-6 md:grid-cols-2 lg:grid-cols-3">
					{opportunities.map((opportunity) => (
						<OpportunityCard
							key={opportunity._id}
							opportunity={opportunity}
						/>
					))}
				</div>

				{/* Empty State */}
				{opportunities.length === 0 && (
					<div className=" rounded-3xl border border-dashed border-zinc-300 py-20 text-center dark:border-zinc-700">
						<h3 className="text-lg font-semibold">
							No opportunities found
						</h3>

						<p className="mt-2 text-zinc-500">
							Try changing your search or filters.
						</p>
					</div>
				)}

				{/* Pagination */}
				<OpportunityPagination
					currentPage={pagination?.page}
					totalPages={pagination?.totalPages}
				/>
			</div>
		</section>
	);
}
