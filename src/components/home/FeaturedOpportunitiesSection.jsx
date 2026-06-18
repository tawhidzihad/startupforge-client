"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";

import { fadeInUp, staggerContainer } from "@/lib/motion";
import OpportunityCard from "../opportunityCard/OpportunityCard";

const opportunities = [
	{
		id: "1",
		roleTitle: "Frontend Developer",
		startupName: "StartupForge",
		requiredSkills: ["React", "Next.js", "Tailwind CSS"],
		deadline: "Jul 15, 2026",
	},
	{
		id: "2",
		roleTitle: "UI/UX Designer",
		startupName: "HireLoop",
		requiredSkills: ["Figma", "Wireframing", "Prototyping"],
		deadline: "Jul 20, 2026",
	},
	{
		id: "3",
		roleTitle: "Digital Marketer",
		startupName: "EcoTrack",
		requiredSkills: ["SEO", "Content Marketing", "Analytics"],
		deadline: "Jul 28, 2026",
	},
];

export default function FeaturedOpportunitiesSection() {
	return (
		<section className="bg-zinc-50 py-20 dark:bg-zinc-900/20 lg:py-28">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-0">
				{/* Header */}
				<motion.div
					{...fadeInUp}
					className="mx-auto mb-14 max-w-3xl text-center"
				>
					<div className=" mb-4 inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-2 text-sm font-medium text-violet-500">
						💼 Featured Opportunities
					</div>

					<h2 className=" text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
						Find Your Next
						<span className=" bg-linear-to-r from-indigo-500 via-violet-500 to-fuchsia-500 bg-clip-text text-transparent">
							{" "}
							Startup Opportunity
						</span>
					</h2>

					<p className=" mt-5 text-base text-zinc-600 md:text-lg dark:text-zinc-400">
						Discover exciting startup roles, connect with founders, and
						contribute your skills to innovative projects.
					</p>
				</motion.div>

				{/* Cards */}
				<motion.div
					variants={staggerContainer}
					initial="initial"
					whileInView="whileInView"
					viewport={{
						once: true,
						amount: 0.2,
					}}
					className=" grid gap-6 md:grid-cols-2 xl:grid-cols-3"
				>
					{opportunities.map((opportunity) => (
						<motion.div key={opportunity.id} variants={fadeInUp}>
							<OpportunityCard opportunity={opportunity} />
						</motion.div>
					))}
				</motion.div>

				{/* Bottom CTA */}
				<motion.div {...fadeInUp} className="mt-14 flex justify-center">
					<motion.div
						whileHover={{
							y: -2,
						}}
						whileTap={{
							scale: 0.98,
						}}
					>
						<Link
							href="/opportunities"
							className=" group inline-flex items-center gap-2 rounded-xl bg-linear-to-r from-indigo-500 to-violet-500 px-6 py-3 font-medium text-white shadow-lg transition-all duration-300 hover:shadow-xl"
						>
							View All Opportunities
							<ArrowRight
								size={18}
								className=" transition-transform duration-300 group-hover:translate-x-1"
							/>
						</Link>
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
}
