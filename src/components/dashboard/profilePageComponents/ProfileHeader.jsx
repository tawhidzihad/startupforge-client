"use client";

import Image from "next/image";

import { Crown, UserRound } from "lucide-react";

export default function ProfileHeader({ user }) {
	const isPremium = user?.plan?.includes("premium");

	return (
		<div className="flex flex-col items-center text-center">
			{/* Avatar */}
			<div className="relative h-32 w-32 overflow-hidden rounded-full border-4 border-background bg-zinc-100 shadow-lg dark:bg-zinc-900">
				{user?.image ? (
					<Image
						src={user.image}
						alt={user.name}
						fill
						loading="eager"
						className="object-cover"
					/>
				) : (
					<div className="flex h-full items-center justify-center">
						<UserRound size={50} className="text-zinc-400" />
					</div>
				)}
			</div>

			{/* Name */}
			<h1 className="mt-5 text-3xl font-bold">{user?.name}</h1>

			{/* Email */}
			<p className="mt-2 text-zinc-500">{user?.email}</p>

			{/* Role + Plan */}
			<div className="mt-4 flex flex-wrap items-center justify-center gap-2">
				{/* Role */}
				<span className="rounded-full bg-violet-500/10 px-3 py-1 text-sm font-medium capitalize text-violet-500">
					{user?.role}
				</span>

				{/* Plan */}
				{isPremium ? (
					<span className="inline-flex items-center gap-1 rounded-full border border-amber-500/20 bg-linear-to-r from-amber-500/10 to-yellow-500/10 px-3 py-1 text-sm font-medium text-amber-500">
						<Crown size={14} />
						Premium Member
					</span>
				) : (
					<span className="rounded-full bg-zinc-100 px-3 py-1 text-sm font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300">
						Free
					</span>
				)}
			</div>
		</div>
	);
}
