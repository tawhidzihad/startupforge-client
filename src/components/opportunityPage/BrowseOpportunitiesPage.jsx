"use client";

import { motion } from "motion/react";
import { useState } from "react";

import OpportunityCard from "../opportunityCard/OpportunityCard";
import OpportunityFilter from "./OpportunityFilter";
import OpportunityPagination from "./OpportunityPagination";
import OpportunitySearch from "./OpportunitySearch";

import { fadeInUp } from "@/lib/motion";

const opportunities = [
	{
		id: "1",
		roleTitle: "Frontend Developer",
		startupName: "StartupForge",
		requiredSkills: ["React", "Next.js", "Tailwind CSS"],
		workType: "Remote",
		industry: "SaaS",
		deadline: "2026-07-15",
	},
	{
		id: "2",
		roleTitle: "Backend Developer",
		startupName: "HireLoop",
		requiredSkills: ["Node.js", "Express", "MongoDB"],
		workType: "Hybrid",
		industry: "HR Tech",
		deadline: "2026-07-20",
	},
	{
		id: "3",
		roleTitle: "UI/UX Designer",
		startupName: "EcoTrack",
		requiredSkills: ["Figma", "Wireframing", "Prototyping"],
		workType: "Remote",
		industry: "Green Tech",
		deadline: "2026-07-25",
	},
	{
		id: "4",
		roleTitle: "Digital Marketer",
		startupName: "MediConnect",
		requiredSkills: ["SEO", "Content Marketing", "Analytics"],
		workType: "On-site",
		industry: "Health Tech",
		deadline: "2026-07-18",
	},
	{
		id: "5",
		roleTitle: "Product Manager",
		startupName: "FinPilot",
		requiredSkills: ["Agile", "Scrum", "Roadmap Planning"],
		workType: "Hybrid",
		industry: "FinTech",
		deadline: "2026-07-30",
	},
	{
		id: "6",
		roleTitle: "Frontend Developer",
		startupName: "LearnSphere",
		requiredSkills: ["React", "JavaScript", "CSS"],
		workType: "Remote",
		industry: "EdTech",
		deadline: "2026-08-01",
	},
	{
		id: "7",
		roleTitle: "Mobile Developer",
		startupName: "TravelSync",
		requiredSkills: ["React Native", "Expo", "Firebase"],
		workType: "Remote",
		industry: "Travel Tech",
		deadline: "2026-08-03",
	},
	{
		id: "8",
		roleTitle: "Growth Marketer",
		startupName: "Foodly",
		requiredSkills: ["Marketing", "Meta Ads", "SEO"],
		workType: "Hybrid",
		industry: "Food Tech",
		deadline: "2026-08-05",
	},
	{
		id: "9",
		roleTitle: "DevOps Engineer",
		startupName: "CloudNest",
		requiredSkills: ["AWS", "Docker", "CI/CD"],
		workType: "Remote",
		industry: "Cloud Computing",
		deadline: "2026-08-07",
	},
	{
		id: "10",
		roleTitle: "QA Engineer",
		startupName: "AgriBoost",
		requiredSkills: ["Testing", "Jest", "Cypress"],
		workType: "On-site",
		industry: "AgriTech",
		deadline: "2026-08-10",
	},
	{
		id: "11",
		roleTitle: "Blockchain Developer",
		startupName: "CryptoVault",
		requiredSkills: ["Solidity", "Ethereum", "Web3"],
		workType: "Remote",
		industry: "Blockchain",
		deadline: "2026-08-12",
	},
	{
		id: "12",
		roleTitle: "Fitness Coach",
		startupName: "FitTrack",
		requiredSkills: ["Coaching", "Nutrition", "Health"],
		workType: "Hybrid",
		industry: "Fitness Tech",
		deadline: "2026-08-14",
	},
	{
		id: "13",
		roleTitle: "Full Stack Developer",
		startupName: "SkillHub",
		requiredSkills: ["React", "Node.js", "MongoDB"],
		workType: "Remote",
		industry: "EdTech",
		deadline: "2026-08-15",
	},
	{
		id: "14",
		roleTitle: "Automation Engineer",
		startupName: "AutoFlow",
		requiredSkills: ["Python", "Automation", "APIs"],
		workType: "On-site",
		industry: "Automation",
		deadline: "2026-08-16",
	},
	{
		id: "15",
		roleTitle: "Customer Success Manager",
		startupName: "PetCare Plus",
		requiredSkills: ["Communication", "CRM", "Support"],
		workType: "Hybrid",
		industry: "Pet Tech",
		deadline: "2026-08-17",
	},
	{
		id: "16",
		roleTitle: "Legal Consultant",
		startupName: "LegalEase",
		requiredSkills: ["Legal Research", "Compliance"],
		workType: "Remote",
		industry: "Legal Tech",
		deadline: "2026-08-18",
	},
	{
		id: "17",
		roleTitle: "Event Manager",
		startupName: "EventSpark",
		requiredSkills: ["Planning", "Operations"],
		workType: "On-site",
		industry: "Event Tech",
		deadline: "2026-08-19",
	},
	{
		id: "18",
		roleTitle: "Finance Analyst",
		startupName: "SafePay",
		requiredSkills: ["Excel", "Finance", "Reporting"],
		workType: "Hybrid",
		industry: "FinTech",
		deadline: "2026-08-20",
	},
	{
		id: "19",
		roleTitle: "AI Engineer",
		startupName: "VisionAI",
		requiredSkills: ["Python", "Machine Learning", "TensorFlow"],
		workType: "Remote",
		industry: "Artificial Intelligence",
		deadline: "2026-08-22",
	},
	{
		id: "20",
		roleTitle: "Content Strategist",
		startupName: "MarketFlow",
		requiredSkills: ["Content Writing", "SEO", "Strategy"],
		workType: "Hybrid",
		industry: "Marketing Tech",
		deadline: "2026-08-25",
	},
];

export default function BrowseOpportunitiesPage() {
	const [search, setSearch] = useState("");

	const [workType, setWorkType] = useState("");
	const [industry, setIndustry] = useState("");

	const [currentPage, setCurrentPage] = useState(1);

	// Later these will come from backend
	// const opportunities = [];

	// Later this will come from backend response
	// const totalPages = 1;

	const totalCount = opportunities.length;

	const limit = 6;

	const totalPages = Math.ceil(totalCount / limit);

	return (
		<section className="py-20">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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
							<OpportunitySearch search={search} setSearch={setSearch} />
						</div>

						<OpportunityFilter
							workType={workType}
							setWorkType={setWorkType}
							industry={industry}
							setIndustry={setIndustry}
						/>
					</div>
				</motion.div>

				{/* Results */}
				<div className="mb-8 flex items-center justify-between">
					<p className="text-sm text-zinc-500">
						Showing{" "}
						<span className="font-semibold text-violet-500">
							{totalCount}
						</span>{" "}
						of <span className="font-semibold">{totalCount}</span>{" "}
						startups
					</p>
				</div>

				{/* Grid */}
				<div className=" grid gap-6 md:grid-cols-2 lg:grid-cols-3">
					{opportunities.map((opportunity) => (
						<OpportunityCard
							key={opportunity.id}
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
					currentPage={currentPage}
					totalPages={totalPages}
					onPageChange={setCurrentPage}
				/>
			</div>
		</section>
	);
}
