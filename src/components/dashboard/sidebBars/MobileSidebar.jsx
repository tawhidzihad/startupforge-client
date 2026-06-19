"use client";

import Link from "next/link";
import { useState } from "react";

import { Button, Drawer } from "@heroui/react";

import SidebarLink from "@/UI/SidebarLink";
import { House, LogOut, Menu, X } from "lucide-react";
import Image from "next/image";

export default function MobileSidebar({ navItems, user }) {
	const [open, setOpen] = useState(false);

	return (
		<>
			<Drawer isOpen={open} onOpenChange={setOpen}>
				<Button isIconOnly variant="light" onPress={() => setOpen(true)}>
					<Menu size={22} />
				</Button>
				<Drawer.Backdrop>
					<Drawer.Content placement="left">
						<Drawer.Dialog className="h-screen">
							{/* Header */}
							<Drawer.Header className="border-b pb-4">
								<div className="w-full">
									{/* Top Row */}
									<div className="flex items-center justify-between">
										<Link href="/">
											<Image
												src="/images/logo.png"
												alt="StartupForge"
												width={10000}
												height={10000}
												className="h-full w-full"
											/>
										</Link>

										<Button
											isIconOnly
											variant="light"
											onPress={() => setOpen(false)}
										>
											<X size={20} />
										</Button>
									</div>

									{/* User Info */}
									<div className="mt-5 flex items-center gap-3">
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

										<div className="min-w-0">
											<h3 className="truncate font-semibold">
												{user?.name}
											</h3>

											<span className="mt-1 inline-flex rounded-full bg-violet-500/10 px-2 py-1 text-xs font-medium text-violet-500">
												{user?.role === "founder" && "Founder"}

												{user?.role === "collaborator" &&
													"Collaborator"}

												{user?.role === "admin" && "Admin"}
											</span>
										</div>
									</div>
								</div>
							</Drawer.Header>

							{/* Routes */}
							<Drawer.Body className="flex-1">
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
							</Drawer.Body>

							{/* Footer */}
							<Drawer.Footer className="border-t">
								<div className="w-full space-y-2">
									<Link
										href="/"
										onClick={() => setOpen(false)}
										className=" flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium hover:bg-zinc-100 dark:hover:bg-zinc-900"
									>
										<House size={18} />
										Back To Home
									</Link>

									<button
										type="button"
										className=" flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-red-500 hover:bg-red-500/10"
									>
										<LogOut size={18} />
										Logout
									</button>
								</div>
							</Drawer.Footer>
						</Drawer.Dialog>
					</Drawer.Content>
				</Drawer.Backdrop>
			</Drawer>
		</>
	);
}
