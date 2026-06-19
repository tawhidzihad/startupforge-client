"use client";

import { motion } from "motion/react";
import Image from "next/image";

import { Building2, Mail, Pencil, Trash2, TrendingUp } from "lucide-react";

export default function MyStartupCard({ startup, onEdit, onDelete }) {
	const { name, logo, industry, description, fundingStage, founderEmail } =
		startup;

	return (
		<motion.div
			initial={{
				opacity: 0,
				y: 20,
			}}
			animate={{
				opacity: 1,
				y: 0,
			}}
			className=" overflow-hidden rounded-3xl border border-zinc-200 bg-background shadow-sm dark:border-zinc-800"
		>
			{/* Cover */}
			<div className="h-28 bg-linear-to-r from-indigo-200 via-violet-300 to-fuchsia-300" />

			<div className="px-6 pb-6">
				{/* Logo */}
				<div className="-mt-12">
					<div className="relative flex h-24 w-24 items-center justify-center overflow-hidden rounded-3xl border-4 border-background bg-zinc-100 shadow-lg dark:bg-zinc-900">
						{logo ? (
							<Image
								src={logo}
								alt={name}
								width={1000}
								height={1000}
								className="h-full w-full object-cover"
							/>
						) : (
							<div className="flex h-full w-full items-center justify-center bg-linear-to-r from-indigo-500 to-violet-500 text-3xl font-bold text-white">
								{name?.charAt(0)?.toUpperCase()}
							</div>
						)}
					</div>
				</div>

				{/* Startup Info */}
				<div className="mt-4">
					<h2 className="text-3xl font-bold">{name}</h2>

					<div className="mt-4 flex flex-wrap gap-2">
						<span className="rounded-full bg-violet-500/10 px-3 py-1 text-sm font-medium text-violet-500">
							{industry}
						</span>

						<span className="rounded-full bg-green-500/10 px-3 py-1 text-sm font-medium text-green-500">
							{fundingStage}
						</span>
					</div>
				</div>

				{/* Details */}
				<div className="mt-6 grid gap-4 md:grid-cols-2">
					<div className="flex items-center gap-3 rounded-2xl border border-zinc-200 p-4 dark:border-zinc-800">
						<Building2 size={20} className="text-violet-500" />

						<div>
							<p className="text-xs text-zinc-500">Industry</p>

							<p className="font-medium">{industry}</p>
						</div>
					</div>

					<div className="flex items-center gap-3 rounded-2xl border border-zinc-200 p-4 dark:border-zinc-800">
						<TrendingUp size={20} className="text-green-500" />

						<div>
							<p className="text-xs text-zinc-500">Funding Stage</p>

							<p className="font-medium">{fundingStage}</p>
						</div>
					</div>

					<div className="md:col-span-2 flex items-center gap-3 rounded-2xl border border-zinc-200 p-4 dark:border-zinc-800">
						<Mail size={20} className="text-indigo-500" />

						<div>
							<p className="text-xs text-zinc-500">Founder Email</p>

							<p className="font-medium break-all">{founderEmail}</p>
						</div>
					</div>
				</div>

				{/* Description */}
				<div className="mt-6">
					<h3 className="mb-2 font-semibold">About Startup</h3>

					<p className="leading-7 text-zinc-600 dark:text-zinc-400">
						{description}
					</p>
				</div>

				{/* Actions */}
				<div className="mt-8 flex flex-col gap-3 sm:flex-row">
					<button
						onClick={onEdit}
						className="flex py-3 flex-1 items-center justify-center gap-2 rounded-xl bg-linear-to-r from-indigo-500 to-violet-500 font-medium text-white transition-all hover:shadow-lg"
					>
						<Pencil size={18} />
						Edit Startup
					</button>

					<button
						onClick={onDelete}
						className="flex py-3 flex-1 items-center justify-center gap-2 rounded-xl border border-red-500/20 bg-red-500/10 font-medium text-red-500 transition-all hover:bg-red-500/20"
					>
						<Trash2 size={18} />
						Delete Startup
					</button>
				</div>
			</div>
		</motion.div>
	);
}
