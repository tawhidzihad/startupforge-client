"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { icons } from "@/UI/icons";

export default function SidebarLink({ href, icon, label }) {
	const pathname = usePathname();
	const isActive = pathname === href;

	const Icon = icons[icon];

	return (
		<Link
			href={href}
			className={`
				flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all

				${
					isActive
						? "bg-violet-500 text-white"
						: "text-zinc-600 hover:bg-violet-500/10 hover:text-violet-500 dark:text-zinc-400"
				}
			`}
		>
			<Icon size={18} />

			<span>{label}</span>
		</Link>
	);
}
