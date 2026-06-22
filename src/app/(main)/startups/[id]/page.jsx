import Image from "next/image";

import EmptyStartupOpportunityState from "@/components/home/EmptyStartupOpportunityState";
import OpportunityCard from "@/components/opportunityCard/OpportunityCard";
import { getAllMyOpportunitiesByStartupId } from "@/lib/fetchings/opportunities";
import { getThisStartup } from "@/lib/fetchings/startups";
import { CalendarDays, Rocket } from "lucide-react";

export default async function StartupDetailsPage({ params }) {
	const { id } = await params;
	const startup = await getThisStartup(id);
	const opportunities = await getAllMyOpportunitiesByStartupId(startup?._id);
	return (
		<div className="mx-auto max-w-7xl w-full space-y-5 px-4 lg:px-0 py-20">
			{/* Startup Hero */}
			<div className="p-8 rounded-3xl border border-zinc-200 bg-background shadow-sm dark:border-zinc-800">
				<div className="flex flex-col items-center text-center">
					<div className="relative h-40 w-40 overflow-hidden rounded-3xl border border-zinc-200 bg-zinc-100 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
						{startup?.logo ? (
							<Image
								src={startup.logo}
								alt={startup.startupName}
								width={1000}
								height={1000}
								className="w-full h-full object-cover"
							/>
						) : (
							<div className="flex h-full w-full items-center justify-center bg-linear-to-r from-indigo-500 to-violet-500 text-4xl font-bold text-white">
								{startup?.startupName?.charAt(0)?.toUpperCase()}
							</div>
						)}
					</div>

					<h1 className="mt-6 text-4xl font-bold">
						{startup.startupName}
					</h1>

					<p className="mt-2 text-zinc-500">
						Founded by {startup.founderName}
					</p>

					<div className="mt-5 flex flex-wrap justify-center gap-3">
						<span className="rounded-full bg-violet-500/10 px-4 py-2 text-sm font-medium text-violet-500">
							{startup.industry}
						</span>

						<span className="rounded-full bg-green-500/10 px-4 py-2 text-sm font-medium text-green-500">
							{startup.fundingStage}
						</span>
					</div>
				</div>
			</div>

			{/* Quick Info */}
			<div className="grid gap-4 md:grid-cols-2">
				<div className="rounded-3xl border border-zinc-200 bg-background p-6 dark:border-zinc-800">
					<div className="flex items-center gap-3">
						<Rocket className="text-violet-500" size={22} />
						<div>
							<p className="text-sm text-zinc-500">Funding Stage</p>
							<p className="font-semibold">{startup.fundingStage}</p>
						</div>
					</div>
				</div>

				<div className="rounded-3xl border border-zinc-200 bg-background p-6 dark:border-zinc-800">
					<div className="flex items-center gap-3">
						
						<CalendarDays className="text-indigo-500" size={22} />
						<div>
							<p className="text-sm text-zinc-500">Created</p>
							<p className="font-semibold">
								{new Date(startup.createdAt).toLocaleDateString(
									"en-US",
									{
										month: "short",
										day: "numeric",
										year: "numeric",
									},
								)}
							</p>
						</div>


					</div>
				</div>
			</div>

			{/* About */}
			<div className="p-8 rounded-3xl border border-zinc-200 bg-background shadow-sm dark:border-zinc-800">
				<h2 className="mb-4 text-2xl font-bold">About Startup</h2>

				<p className="leading-8 text-zinc-600 dark:text-zinc-400">
					{startup.description}
				</p>
			</div>

			{/* Opportunities */}
			<section>
				{/* Opportunity Cards */}
				{opportunities?.length ? (
					<>
						<div className="mb-6 flex items-center justify-between">
							<h2 className="text-3xl font-bold">Open Opportunities</h2>
						</div>
						
						<div className="grid gap-6 lg:grid-cols-3">
							{opportunities.map((opportunity) => (
								<OpportunityCard
									key={opportunity._id}
									opportunity={opportunity}
								/>
							))}
						</div>
					</>
				) : (
					<EmptyStartupOpportunityState />
				)}
			</section>
		</div>
	);
}
