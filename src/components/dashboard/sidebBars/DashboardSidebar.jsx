"use client";

import { authClient } from "@/lib/auth-client";
import SidebarLink from "@/UI/SidebarLink";
import { House, LogOut } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function DashboardSidebar({ navItems, user }) {
	const router = useRouter();

	const handleLogOutButton = async () => {
		await authClient.signOut({
			fetchOptions: {
				onSuccess: () => {
					toast.success("You have been logged out successfully.");
					router.push("/");
				},
			},
		});
	};

	return (
		<aside className=" fixed left-0 top-0 hidden h-screen w-72 border-r bg-background lg:flex lg:flex-col">
			{/* Logo */}
			<div className="border-b p-6">
				<Link href="/">
					<Image
						src="/images/logo.png"
						alt="StartupForge"
						width={10000}
						height={10000}
						className="w-full h-full"
						loading="eager"
					/>
				</Link>
			</div>

			{/* User Image Name and Role */}
			<div className="border-b p-6">
				<div className="flex items-center gap-3">
					<div className="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border border-zinc-200 bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-800">
						{user?.image ? (
							<Image
								src={user?.image}
								alt={user?.name}
								width={1000}
								height={1000}
								className="h-full w-full object-cover"
							/>
						) : (
							<div className="flex h-full w-full items-center justify-center bg-linear-to-r from-indigo-500 to-violet-500 text-lg font-semibold text-white">
								{user?.name?.charAt(0)?.toUpperCase()}
							</div>
						)}
					</div>

					<div className="min-w-0 flex-1">
						<h3 className="truncate font-semibold">{user?.name}</h3>

						<span className=" mt-1 inline-flex rounded-full bg-violet-500/10 px-2.5 py-1 text-xs font-medium text-violet-500">
							{user?.role === "founder" && "Founder"}

							{user?.role === "collaborator" && "Collaborator"}

							{user?.role === "admin" && "Admin"}
						</span>
					</div>
				</div>
			</div>

			{/* Nav */}
			<div className="flex-1 p-4">
				<nav className="space-y-2">
					{navItems.map((item) => (
						<SidebarLink
							key={item.id}
							href={item.href}
							icon={item.icon}
							label={item.label}
						/>
					))}
				</nav>
			</div>

			{/* Bottom */}
			<div className="border-t p-4">
				<div className="space-y-2">
					<Link
						href="/"
						className=" flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium hover:bg-zinc-100 dark:hover:bg-zinc-900"
					>
						<House size={18} />
						Back To Home
					</Link>

					<button
						onClick={handleLogOutButton}
						className="cursor-pointer flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-red-500 hover:bg-red-500/10"
					>
						<LogOut size={18} />
						Logout
					</button>
				</div>
			</div>
		</aside>
	);
}
