"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavButton({ label, href }) {
	const pathname = usePathname();

	const isActive = pathname === href;

	return (
		<Link
			href={href}
			className={` rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
				isActive
					? "bg-violet-500/10 text-violet-500 border border-violet-500/20"
					: "text-zinc-600 dark:text-zinc-400 hover:text-violet-500"
			}`}
		>
			{label}
		</Link>
	);
}
