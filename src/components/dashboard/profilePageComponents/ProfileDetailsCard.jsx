// "use client";

// import Image from "next/image";

// import { Crown, Pencil, UserRound } from "lucide-react";
// import { motion } from "motion/react";

// export default function ProfileDetailsCard({ user, onEdit }) {
// 	return (
// 		<motion.div
// 			initial={{ opacity: 0, y: 20 }}
// 			animate={{ opacity: 1, y: 0 }}
// 			className="mx-auto max-w-7xl overflow-hidden rounded-3xl border border-zinc-200 bg-background shadow-sm dark:border-zinc-800"
// 		>
// 			{/* Cover */}
// 			<div className="h-40 bg-linear-to-r from-indigo-500 via-violet-500 to-fuchsia-500" />

// 			<div className="px-6 pb-8 lg:px-10">
// 				{/* Avatar */}
// 				<div className="-mt-16 flex flex-col items-center text-center">
// 					<div className="relative h-32 w-32 overflow-hidden rounded-full border-4 border-background bg-zinc-100 shadow-lg dark:bg-zinc-900">
// 						{user?.image ? (
// 							<Image
// 								src={user.image}
// 								alt={user.name}
// 								fill
// 								className="object-cover"
// 							/>
// 						) : (
// 							<div className="flex h-full items-center justify-center">
// 								<UserRound size={50} className="text-zinc-400" />
// 							</div>
// 						)}
// 					</div>

// 					<h1 className="mt-5 text-3xl font-bold">{user?.name}</h1>

// 					<div className="mt-3 flex flex-wrap items-center justify-center gap-2">
// 						<span className="rounded-full bg-violet-500/10 px-3 py-1 text-sm font-medium text-violet-500 capitalize">
// 							{user?.role}
// 						</span>

// 						<span className="inline-flex items-center gap-1 rounded-full bg-amber-500/10 px-3 py-1 text-sm font-medium text-amber-500">
// 							<Crown size={14} />
// 							{user?.plan}
// 						</span>
// 					</div>

// 					<p className="mt-3 text-zinc-500">{user?.email}</p>
// 				</div>

// 				{/* Profile Info */}
// 				<div className="mt-10 grid gap-5 md:grid-cols-2">
// 					{/* Bio */}
// 					<div className="rounded-2xl border border-zinc-200 p-5 dark:border-zinc-800">
// 						<h3 className="mb-2 font-semibold">Bio</h3>

// 						<p className="text-sm leading-7 text-zinc-500">
// 							{user?.bio || "No bio added yet."}
// 						</p>
// 					</div>

// 					{/* Skills */}
// 					<div className="rounded-2xl border border-zinc-200 p-5 dark:border-zinc-800">
// 						<h3 className="mb-2 font-semibold">Skills</h3>

// 						<p className="text-sm leading-7 text-zinc-500">
// 							{user?.skills || "No skills added yet."}
// 						</p>
// 					</div>

// 					{/* Portfolio */}
// 					<div className="md:col-span-2 rounded-2xl border border-zinc-200 p-5 dark:border-zinc-800">
// 						<h3 className="mb-2 font-semibold">Portfolio</h3>

// 						{user?.portfolio ? (
// 							<a
// 								href={user.portfolio}
// 								target="_blank"
// 								rel="noreferrer"
// 								className="text-violet-500 hover:underline"
// 							>
// 								{user.portfolio}
// 							</a>
// 						) : (
// 							<p className="text-sm text-zinc-500">
// 								No portfolio added yet.
// 							</p>
// 						)}
// 					</div>
// 				</div>

// 				{/* Action */}
// 				<div className="mt-8 flex justify-center">
// 					<button
// 						onClick={onEdit}
// 						className="inline-flex h-12 cursor-pointer items-center gap-2 rounded-xl bg-linear-to-r from-indigo-500 to-violet-500 px-6 font-medium text-white transition-all hover:shadow-lg"
// 					>
// 						<Pencil size={18} />
// 						Edit Profile
// 					</button>
// 				</div>
// 			</div>
// 		</motion.div>
// 	);
// }

"use client";

import { Pencil } from "lucide-react";
import { motion } from "motion/react";

import EmptyProfileField from "./EmptyProfileField";
import ProfileHeader from "./ProfileHeader";
import ProfileInfoCard from "./ProfileInfoCard";

export default function ProfileDetailsCard({ user, onEdit }) {
	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			className="mx-auto max-w-7xl overflow-hidden rounded-3xl border border-zinc-200 bg-background shadow-sm dark:border-zinc-800"
		>
			{/* Cover */}
			<div className="h-40 bg-linear-to-r from-indigo-200 via-violet-300 to-fuchsia-300" />

			<div className="px-6 pb-8 lg:px-10">
				{/* Header */}
				<div className="-mt-16">
					<ProfileHeader user={user} />
				</div>

				{/* Profile Info */}
				<div className="mt-10 grid gap-5 md:grid-cols-2">
					{/* Bio */}
					<ProfileInfoCard title="Bio">
						{user?.bio ? (
							<p className="text-sm leading-7 text-zinc-500">
								{user.bio}
							</p>
						) : (
							<EmptyProfileField message="No bio added yet." />
						)}
					</ProfileInfoCard>

					{/* Skills */}
					<ProfileInfoCard title="Skills">
						{user?.skills ? (
							<p className="text-sm leading-7 text-zinc-500">
								{user.skills}
							</p>
						) : (
							<EmptyProfileField message="No skills added yet." />
						)}
					</ProfileInfoCard>

					{/* Portfolio */}
					<ProfileInfoCard title="Portfolio" className="md:col-span-2">
						{user?.portfolio ? (
							<a
								href={user.portfolio}
								target="_blank"
								rel="noreferrer"
								className="break-all text-violet-500 transition-colors hover:text-violet-600 hover:underline"
							>
								{user.portfolio}
							</a>
						) : (
							<EmptyProfileField message="No portfolio added yet." />
						)}
					</ProfileInfoCard>
				</div>

				{/* Action */}
				<div className="mt-8 flex justify-center">
					<button
						onClick={onEdit}
						className="inline-flex h-12 cursor-pointer items-center gap-2 rounded-xl bg-linear-to-r from-indigo-500 to-violet-500 px-6 font-medium text-white transition-all hover:shadow-lg"
					>
						<Pencil size={18} />
						Edit Profile
					</button>
				</div>
			</div>
		</motion.div>
	);
}
