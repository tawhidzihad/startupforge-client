"use client";

import { Moon, Sun } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
	const [mounted, setMounted] = useState(false);

	const { theme, setTheme } = useTheme();

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) return null;

	const isDark = theme === "dark";

	return (
		<motion.button
			whileTap={{ scale: 0.9 }}
			whileHover={{ scale: 1.05 }}
			onClick={() => setTheme(isDark ? "light" : "dark")}
			className={` relative overflow-hidden rounded-full border p-2 transition-colors duration-300
				${isDark ? "border-zinc-700" : "border-zinc-300"}`}
			aria-label="Toggle Theme"
		>
			<AnimatePresence mode="wait">
				<motion.div
					key={isDark ? "sun" : "moon"}
					initial={{
						rotate: -180,
						scale: 0,
						opacity: 0,
					}}
					animate={{
						rotate: 0,
						scale: 1,
						opacity: 1,
					}}
					exit={{
						rotate: 180,
						scale: 0,
						opacity: 0,
					}}
					transition={{
						duration: 0.25,
					}}
				>
					{isDark ? (
						<Sun className="h-5 w-5 text-yellow-500" />
					) : (
						<Moon className="h-5 w-5 text-violet-500" />
					)}
				</motion.div>
			</AnimatePresence>
		</motion.button>
	);
}
