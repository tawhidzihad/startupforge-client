"use client";

import { Button } from "@heroui/react";
import { ArrowRight, Menu, X } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";
import { useState } from "react";

import Image from "next/image";
import MobileNavItem from "./MobileNavItem";

export default function MobileMenu({ user, isPending, handleLogOutButton }) {
	const [open, setOpen] = useState(false);

	return (
		<>
			<Button isIconOnly variant="light" onPress={() => setOpen(!open)}>
				{open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
			</Button>

			{open && (
				<div className=" absolute left-0 top-20 w-full border-b border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-950 lg:hidden">
					<div className="space-y-2">
						<MobileNavItem label={"Home"} href={"/"} />
						<MobileNavItem label={"Browse Startups"} href={"/startups"} />
						<MobileNavItem
							label={"Browse Opportunities"}
							href={"/opportunities"}
						/>

						{user && (
							<MobileNavItem
								label={"Dashboard"}
								href={`${user?.role === "founder" ? "/dashboard/founder" : user?.role === "collaborator" ? "/dashboard/collaborator" : user?.role === "admin" && "/dashboard/admin"}`}
							/>
						)}
					</div>

					<div className="mt-6 flex items-center justify-between">
						{isPending ? (
							<div className="h-8 w-8 animate-spin rounded-full border-4 border-zinc-200 border-t-violet-500" />
						) : user ? (
							<>
								<div className="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-full border border-zinc-200 bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-800">
									{user?.image ? (
										<Image
											src={user?.image}
											alt={user?.name}
											fill
											className="object-cover"
										/>
									) : (
										<div className=" flex h-full w-full items-center justify-center bg-linear-to-r from-indigo-500 to-violet-500 text-lg font-bold text-white">
											{user?.name?.charAt(0)?.toUpperCase()}
										</div>
									)}
								</div>
								<motion.button
									onClick={handleLogOutButton}
									type="button"
									whileHover={{ y: -1 }}
									whileTap={{ scale: 0.98 }}
									className="cursor-pointer inline-flex h-10 items-center justify-center rounded-lg bg-linear-to-r from-red-500 to-rose-600 px-4 text-sm font-medium text-white shadow-sm transition-all duration-300 hover:shadow-lg"
								>
									Logout
								</motion.button>
							</>
						) : (
							<>
								<motion.div
									whileHover={{ y: -1 }}
									whileTap={{ scale: 0.98 }}
								>
									<Link
										href="/signin"
										className=" inline-flex h-10 items-center justify-center rounded-lg bg-linear-to-r from-indigo-500 to-violet-600 px-4 text-sm font-medium text-white shadow-sm transition-all duration-300 hover:shadow-lg"
									>
										Login
									</Link>
								</motion.div>
								<motion.div
									whileHover={{ y: -1 }}
									whileTap={{ scale: 0.98 }}
								>
									<Link
										href="/signup"
										className=" inline-flex h-10 items-center justify-center gap-2 rounded-lg bg-linear-to-r from-indigo-500 to-violet-500 px-4 text-sm font-medium text-white shadow-sm transition-all duration-300 hover:shadow-lg"
									>
										Get Started
										<ArrowRight
											size={16}
											className="transition-transform duration-300 group-hover:translate-x-1"
										/>
									</Link>
								</motion.div>
							</>
						)}
					</div>
				</div>
			)}
		</>
	);
}
