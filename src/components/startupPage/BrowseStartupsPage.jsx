"use client";

import { motion } from "motion/react";
import { useMemo, useState } from "react";

import StartupCard from "../startupCard/StartupCard";
import StartupFilter from "./StartupFilter";
import StartupSearchBar from "./StartupSearchBar";

import { fadeInUp } from "@/lib/motion";

export const startups = [
	{
		id: "1",
		name: "StartupForge",
		logo: null,
		founderName: "Tawhid Zihad",
		industry: "SaaS",
		teamSizeNeeded: 5,
		createdAt: "2026-06-18",
	},
	{
		id: "2",
		name: "HireLoop",
		logo: null,
		founderName: "Sarah Johnson",
		industry: "HR Tech",
		teamSizeNeeded: 3,
		createdAt: "2026-06-17",
	},
	{
		id: "3",
		name: "EcoTrack",
		logo: null,
		founderName: "Michael Chen",
		industry: "Green Tech",
		teamSizeNeeded: 4,
		createdAt: "2026-06-16",
	},
	{
		id: "4",
		name: "MediConnect",
		logo: null,
		founderName: "Emma Wilson",
		industry: "Health Tech",
		teamSizeNeeded: 6,
		createdAt: "2026-06-15",
	},
	{
		id: "5",
		name: "FinPilot",
		logo: null,
		founderName: "James Carter",
		industry: "FinTech",
		teamSizeNeeded: 4,
		createdAt: "2026-06-14",
	},
	{
		id: "6",
		name: "LearnSphere",
		logo: null,
		founderName: "Olivia Brown",
		industry: "EdTech",
		teamSizeNeeded: 5,
		createdAt: "2026-06-13",
	},
	{
		id: "7",
		name: "TravelSync",
		logo: null,
		founderName: "Daniel Lee",
		industry: "Travel Tech",
		teamSizeNeeded: 3,
		createdAt: "2026-06-12",
	},
	{
		id: "8",
		name: "Foodly",
		logo: null,
		founderName: "Sophia Davis",
		industry: "Food Tech",
		teamSizeNeeded: 7,
		createdAt: "2026-06-11",
	},
	{
		id: "9",
		name: "CloudNest",
		logo: null,
		founderName: "William Taylor",
		industry: "Cloud Computing",
		teamSizeNeeded: 4,
		createdAt: "2026-06-10",
	},
	{
		id: "10",
		name: "AgriBoost",
		logo: null,
		founderName: "Noah Anderson",
		industry: "AgriTech",
		teamSizeNeeded: 5,
		createdAt: "2026-06-09",
	},
	{
		id: "11",
		name: "CryptoVault",
		logo: null,
		founderName: "Ethan Martin",
		industry: "Blockchain",
		teamSizeNeeded: 6,
		createdAt: "2026-06-08",
	},
	{
		id: "12",
		name: "FitTrack",
		logo: null,
		founderName: "Mia Thompson",
		industry: "Fitness Tech",
		teamSizeNeeded: 3,
		createdAt: "2026-06-07",
	},
	{
		id: "13",
		name: "SkillHub",
		logo: null,
		founderName: "Liam White",
		industry: "EdTech",
		teamSizeNeeded: 4,
		createdAt: "2026-06-06",
	},
	{
		id: "14",
		name: "AutoFlow",
		logo: null,
		founderName: "Charlotte Harris",
		industry: "Automation",
		teamSizeNeeded: 5,
		createdAt: "2026-06-05",
	},
	{
		id: "15",
		name: "PetCare Plus",
		logo: null,
		founderName: "Benjamin Clark",
		industry: "Pet Tech",
		teamSizeNeeded: 2,
		createdAt: "2026-06-04",
	},
	{
		id: "16",
		name: "LegalEase",
		logo: null,
		founderName: "Amelia Lewis",
		industry: "Legal Tech",
		teamSizeNeeded: 4,
		createdAt: "2026-06-03",
	},
	{
		id: "17",
		name: "EventSpark",
		logo: null,
		founderName: "Lucas Walker",
		industry: "Event Tech",
		teamSizeNeeded: 6,
		createdAt: "2026-06-02",
	},
	{
		id: "18",
		name: "SafePay",
		logo: null,
		founderName: "Harper Hall",
		industry: "FinTech",
		teamSizeNeeded: 5,
		createdAt: "2026-06-01",
	},
	{
		id: "19",
		name: "VisionAI",
		logo: null,
		founderName: "Henry Young",
		industry: "Artificial Intelligence",
		teamSizeNeeded: 8,
		createdAt: "2026-05-31",
	},
	{
		id: "20",
		name: "MarketFlow",
		logo: null,
		founderName: "Evelyn King",
		industry: "Marketing Tech",
		teamSizeNeeded: 4,
		createdAt: "2026-05-30",
	},
];

export default function BrowseStartupsPage() {
	const [search, setSearch] = useState("");
	const [sort, setSort] = useState("newest");
	const [currentPage, setCurrentPage] = useState(1);

	const itemsPerPage = 9;

	const filteredData = useMemo(() => {
		let data = [...startups];

		// Future Backend Search
		// For now local search
		if (search.trim()) {
			data = data.filter((startup) =>
				startup.name.toLowerCase().includes(search.toLowerCase()),
			);
		}

		if (sort === "newest") {
			data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
		}

		if (sort === "oldest") {
			data.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
		}

		return data;
	}, [search, sort]);

	const totalPages = Math.ceil(filteredData.length / itemsPerPage);

	const paginatedData = filteredData.slice(
		(currentPage - 1) * itemsPerPage,
		currentPage * itemsPerPage,
	);

	return (
		<section className="py-20">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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
							<StartupSearchBar
								search={search}
								setSearch={(value) => {
									setSearch(value);
									setCurrentPage(1);
								}}
							/>
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
				<div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
					{paginatedData.map((startup) => (
						<StartupCard key={startup.id} startup={startup} />
					))}
				</div>

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
