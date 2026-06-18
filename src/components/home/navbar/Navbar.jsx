"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

import { authClient } from "@/lib/auth-client";
import NavButton from "@/UI/NavButton";
import ThemeToggle from "@/UI/ThemeToggle";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import MobileMenu from "./MobileMenu";
import { navLinks } from "./navLinks";

export default function Navbar() {
	const router = useRouter();
	const { data: session, isPending } = authClient.useSession();
	const user = session?.user;

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

					{isPending ? (
						<div className="h-8 w-8 animate-spin rounded-full border-4 border-zinc-200 border-t-violet-500" />
					) : user ? (
						<>
							{/* User image */}
							<div className="group relative">
								<div className="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-full border border-zinc-200 bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-800">
									{user?.image ? (
										<Image
											src={user.image}
											alt={user.name}
											fill
											className="object-cover"
										/>
									) : (
										<div className="flex h-full w-full items-center justify-center bg-linear-to-r from-indigo-500 to-violet-500 text-lg font-bold text-white">
											{user?.name?.charAt(0)?.toUpperCase()}
										</div>
									)}
								</div>

								{/* Tooltip */}
								<div className=" pointer-events-none absolute left-1/2 top-full z-50 mt-2 -w-translate-x-1/2 translate-x-[-50%] whitespace-nowrap rounded-lg bg-zinc-900 px-3 py-1.5 text-xs text-white opacity-0 shadow-lg transition-all duration-200 group-hover:opacity-100">
									{user?.name}
								</div>
							</div>

							{/* Logout Button */}
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

				{/* Mobile */}
				<div className="lg:hidden">
					<ThemeToggle />
					<MobileMenu
						user={user}
						isPending={isPending}
						handleLogOutButton={handleLogOutButton}
					/>
				</div>
			</div>
		</header>
	);
}
