import { getThisOpportunity } from "@/lib/fetchings/opportunities";
import Link from "next/link";

import {
	ArrowRight,
	BriefcaseBusiness,
	Building2,
	CalendarDays,
	Clock3,
	Code2,
} from "lucide-react";

const OpportunityDetailsPage = async ({ params }) => {
	const { id } = await params;
	const opportunity = await getThisOpportunity(id);

	return (
		<section className="py-16">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-0">
				<div className="grid gap-8 lg:grid-cols-3">
					{/* Main Content */}
					<div className="lg:col-span-2">
						<div className="rounded-3xl border border-zinc-200 bg-background p-8 shadow-sm dark:border-zinc-800">
							{/* Header */}
							<div className="mb-8">
								<h1 className="text-4xl font-bold">
									{opportunity.roleTitle}
								</h1>

								<div className="mt-4 flex flex-wrap gap-2">
									<span className="inline-flex items-center gap-2 rounded-full bg-zinc-100 px-4 py-2 text-sm dark:bg-zinc-800">
										<BriefcaseBusiness size={14} />
										{opportunity.startupName}
									</span>

									<span className="inline-flex items-center gap-2 rounded-full bg-violet-500/10 px-4 py-2 text-sm font-medium text-violet-500">
										<Building2 size={14} />
										{opportunity.industry}
									</span>
								</div>
							</div>

							{/* Details */}
							<div className="grid gap-4 md:grid-cols-3">
								<div className="rounded-2xl border border-zinc-200 p-5 dark:border-zinc-800">
									<div className="mb-2 flex items-center gap-2 text-violet-500">
										<BriefcaseBusiness size={18} />
										<span className="text-sm font-medium">
											Work Type
										</span>
									</div>

									<p className="font-semibold">
										{opportunity.workType}
									</p>
								</div>

								<div className="rounded-2xl border border-zinc-200 p-5 dark:border-zinc-800">
									<div className="mb-2 flex items-center gap-2 text-green-500">
										<Clock3 size={18} />
										<span className="text-sm font-medium">
											Commitment
										</span>
									</div>

									<p className="font-semibold">
										{opportunity.commitmentLevel}
									</p>
								</div>

								<div className="rounded-2xl border border-zinc-200 p-5 dark:border-zinc-800">
									<div className="mb-2 flex items-center gap-2 text-indigo-500">
										<CalendarDays size={18} />
										<span className="text-sm font-medium">
											Deadline
										</span>
									</div>

									<p className="font-semibold">
										{opportunity.deadline}
									</p>
								</div>
							</div>

							{/* Skills */}
							<div className="mt-10">
								<h2 className="mb-4 text-2xl font-bold">
									Required Skills
								</h2>

								<div className="flex flex-wrap gap-3">
									{opportunity.requiredSkills.map((skill, index) => (
										<span
											key={index}
											className="rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-2 text-sm font-medium text-violet-500"
										>
											{skill}
										</span>
									))}
								</div>
							</div>

							{/* About */}
							<div className="mt-10">
								<h2 className="mb-4 text-2xl font-bold">
									Opportunity Overview
								</h2>

								<p className="leading-8 text-zinc-600 dark:text-zinc-400">
									We are looking for a passionate{" "}
									{opportunity.roleTitle} to join{" "}
									{opportunity.startupName}. The ideal candidate should
									have experience with the required technologies and be
									excited about building innovative products in the{" "}
									{opportunity.industry} industry.
								</p>
							</div>
						</div>
					</div>

					{/* Sidebar */}
					<div>
						<div className="sticky top-24 rounded-3xl border border-zinc-200 bg-background p-6 shadow-sm dark:border-zinc-800">
							<div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-violet-500/10 text-violet-500">
								<Code2 size={30} />
							</div>

							<h3 className="text-2xl font-bold">Apply for this Role</h3>

							<p className="mt-3 text-zinc-500">
								Join {opportunity.startupName} and contribute to
								building the future.
							</p>

							<Link
								href={`/opportunities/${opportunity._id}/apply`}
								className="mt-6 flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-linear-to-r from-indigo-500 to-violet-500 font-medium text-white transition-all hover:shadow-lg"
							>
								Apply Now
								<ArrowRight size={18} />
							</Link>

							<div className="mt-6 border-t border-zinc-200 pt-6 dark:border-zinc-800">
								<div className="space-y-3 text-sm">
									<div className="flex justify-between">
										<span className="text-zinc-500">Startup</span>

										<span className="font-medium">
											{opportunity.startupName}
										</span>
									</div>

									<div className="flex justify-between">
										<span className="text-zinc-500">Industry</span>

										<span className="font-medium">
											{opportunity.industry}
										</span>
									</div>

									<div className="flex justify-between">
										<span className="text-zinc-500">Type</span>

										<span className="font-medium">
											{opportunity.workType}
										</span>
									</div>

									<div className="flex justify-between">
										<span className="text-zinc-500">Commitment</span>

										<span className="font-medium">
											{opportunity.commitmentLevel}
										</span>
									</div>
								</div>
							</div>

							<Link
								href={`/startups/${opportunity.startupId}`}
								className="mt-6 inline-flex text-sm font-medium text-violet-500 hover:underline"
							>
								View Startup Profile
							</Link>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default OpportunityDetailsPage;
