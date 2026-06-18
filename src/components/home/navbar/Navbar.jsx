"use client";

import { Button } from "@heroui/react";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

import NavButton from "@/UI/NavButton";
import ThemeToggle from "@/UI/ThemeToggle";
import MobileMenu from "./MobileMenu";
import { navLinks } from "./navLinks";

export default function Navbar() {
	return (
		<header className=" sticky top-0 z-50 border-b border-zinc-200/50 bg-white/80 backdrop-blur-xl dark:border-zinc-800 dark:bg-zinc-950/80">
			<div className=" mx-auto flex h-20 max-w-7xl items-center justify-between px-4 lg:px-0">
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
				<nav className="hidden items-center gap-2 md:flex">
					{navLinks.map((link) => (
						<NavButton key={link.href} {...link} />
					))}
				</nav>

				{/* Desktop Right */}
				<div className="hidden items-center gap-4 md:flex">
					<ThemeToggle />

					<motion.div
						whileHover={{
							scale: 1.05,
						}}
					>
						<Link href="/login">
							<Button variant="secondary">Login</Button>
						</Link>
					</motion.div>
				</div>

				{/* Mobile */}
				<div className="md:hidden">
					<ThemeToggle />
					<MobileMenu />
				</div>
			</div>
		</header>
	);
}
