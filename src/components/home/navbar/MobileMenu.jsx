"use client";

import { Button } from "@heroui/react";
import { ArrowRight, Menu, X } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";
import { useState } from "react";

import MobileNavItem from "./MobileNavItem";
import { navLinks } from "./navLinks";

export default function MobileMenu() {
	const [open, setOpen] = useState(false);

	return (
		<>
			<Button isIconOnly variant="light" onPress={() => setOpen(!open)}>
				{open ? <X size={20} /> : <Menu size={20} />}
			</Button>

			{open && (
				<div className=" absolute left-0 top-20 w-full border-b border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-950 lg:hidden">
					<div className="space-y-2">
						{navLinks.map((link) => (
							<MobileNavItem key={link.href} {...link} />
						))}
					</div>

					<div className="mt-6 flex items-center justify-between">
						<motion.div whileHover={{ y: -1 }} whileTap={{ scale: 0.98 }}>
							<Link
								href="/login"
								className=" inline-flex h-10 items-center justify-center rounded bg-linear-to-r from-indigo-500 to-violet-600 px-4 text-sm font-medium text-white shadow-sm transition-all duration-300 hover:shadow-lg"
							>
								Login
							</Link>
						</motion.div>

						<motion.div whileHover={{ y: -1 }} whileTap={{ scale: 0.98 }}>
							<Link
								href="/login"
								className=" inline-flex h-10 items-center justify-center gap-2 rounded bg-linear-to-r from-indigo-500 to-violet-500 px-4 text-sm font-medium text-white shadow-sm transition-all duration-300 hover:shadow-lg"
							>
								Get Started
								<ArrowRight
									size={16}
									className="transition-transform duration-300 group-hover:translate-x-1"
								/>
							</Link>
						</motion.div>
					</div>
				</div>
			)}
		</>
	);
}
