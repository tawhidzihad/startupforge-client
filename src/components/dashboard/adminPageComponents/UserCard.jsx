"use client";

import { Avatar } from "@heroui/react";

export default function UserCard({ user, handleBlockToggle }) {
	return (
		<div className="rounded-3xl border border-zinc-200 bg-background p-5 shadow-sm dark:border-zinc-800">
			<div className="flex items-center gap-3">
				<Avatar>
					<Avatar.Image
						alt={user?.name}
						src={user?.image}
						referrerPolicy="no-referrer"
					/>
					<Avatar.Fallback>
						{user.name?.charAt(0).toUpperCase()}
					</Avatar.Fallback>
				</Avatar>

				<div>
					<h3 className="font-semibold">{user.name}</h3>

					<p className="text-sm text-zinc-500">{user.email}</p>
				</div>
			</div>

			<div className="mt-4 mb-4 space-y-2 text-sm">
				<p>
					<span className="font-medium">Role:</span> {user.role}
				</p>

				<p>
					<span className="font-medium">Plan:</span>{" "}
					{user.plan.includes("premium") ? "Premium" : "Free"}
				</p>

				<p>
					<span className="font-medium">Joined:</span>{" "}
					{new Date(user.createdAt).toLocaleString("en-US", {
						month: "long",
						day: "numeric",
						year: "numeric",
						hour: "numeric",
						minute: "2-digit",
						hour12: true,
					})}
				</p>
			</div>

			<button
				disabled={user?.role === "admin"}
				onClick={() => handleBlockToggle(user)}
				className={`rounded-lg px-4 py-2 text-sm font-medium text-white transition-opacity ${
					user?.role === "admin"
						? "cursor-not-allowed bg-zinc-400 opacity-60"
						: user.isBlocked
							? "cursor-pointer bg-green-500"
							: "cursor-pointer bg-red-500"
				}`}
			>
				{user?.role === "admin"
					? "Protected"
					: user.isBlocked
						? "Unblock"
						: "Block"}
			</button>
		</div>
	);
}
