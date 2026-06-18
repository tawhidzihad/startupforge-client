"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MobileNavItem({ label, href }) {
	const pathname = usePathname();

	const isActive = pathname === href;

	return (
		<Link
			href={href}
			className={` block rounded-xl px-4 py-3 text-sm font-medium transition-all ${
				isActive
					? "bg-violet-500/10 text-violet-500"
					: "hover:bg-zinc-100 dark:hover:bg-zinc-800"
			}`}
		>
			{label}
		</Link>
	);
}
