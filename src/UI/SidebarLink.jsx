"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
	BriefcaseBusiness,
	Building2,
	ClipboardList,
	CreditCard,
	FileText,
	LayoutDashboard,
	Search,
	Settings,
	User,
	Users,
} from "lucide-react";

const icons = {
	// Common
	dashboard: LayoutDashboard,
	profile: User,

	// Founder
	startup: Building2,
	settings: Settings,
	opportunity: BriefcaseBusiness,
	manage: ClipboardList,
	applications: FileText,

	// Collaborator
	opportunities: Search,

	// Admin
	users: Users,
	transactions: CreditCard,
};

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
