"use client";

import { Button } from "@heroui/react";
import { Menu, X } from "lucide-react";
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
				<div className=" absolute left-0 top-20 w-full border-b border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-950 md:hidden">
					<div className="space-y-2">
						{navLinks.map((link) => (
							<MobileNavItem key={link.href} {...link} />
						))}
					</div>

					<div className="mt-6 flex items-center justify-between">
						{/* <ThemeToggle /> */}

						<Link href="/login">
							<Button color="secondary">Login</Button>
						</Link>
					</div>
				</div>
			)}
		</>
	);
}
