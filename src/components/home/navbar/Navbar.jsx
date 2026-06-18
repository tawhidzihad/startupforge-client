"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

import NavButton from "@/UI/NavButton";
import ThemeToggle from "@/UI/ThemeToggle";
import { ArrowRight } from "lucide-react";
import MobileMenu from "./MobileMenu";
import { navLinks } from "./navLinks";

export default function Navbar() {
	return (
		<header className="sticky top-0 z-50 border-b border-zinc-200/50 bg-white/80 backdrop-blur-xl dark:border-zinc-800 dark:bg-zinc-950/80">
			<div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 lg:px-0">
				{/* Logo */}
				<Link href="/">
					<Image
						src="/images/logo.png"
						alt="StartupForge"
						width={10000}
						height={10000}
						className="w-auto h-12"
					/>
				</Link>

				{/* Desktop Menu */}
				<nav className="hidden items-center gap-2 lg:flex">
					{navLinks.map((link) => (
						<NavButton key={link.href} {...link} />
					))}
				</nav>

				{/* Desktop Right */}
				<div className="hidden items-center gap-4 lg:flex">
					<ThemeToggle />

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

				{/* Mobile */}
				<div className="lg:hidden">
					<ThemeToggle />
					<MobileMenu />
				</div>
			</div>
		</header>
	);
}
