"use client";

import { Dropdown } from "@heroui/react";

import { ArrowUpDown, Check, ChevronsUpDown } from "lucide-react";

export default function StartupFilter({ sort, setSort }) {
	return (
		<Dropdown>
			<Dropdown.Trigger className="w-full">
				<div className="inline-flex w-full h-12 cursor-pointer items-center justify-between gap-3 rounded-xl bg-background px-4 text-sm font-medium transition-all duration-200 hover:bg-violet-500/5">
					<div className="flex items-center gap-2">
						<ArrowUpDown size={16} className="text-zinc-500" />

						<span>
							{sort === "newest" ? "Newest First" : "Oldest First"}
						</span>
					</div>

					<ChevronsUpDown size={14} className="text-zinc-500" />
				</div>
			</Dropdown.Trigger>

			<Dropdown.Popover>
				<Dropdown.Menu>
					<Dropdown.Item id="newest" onAction={() => setSort("newest")}>
						<div className="flex items-center justify-between">
							<span>Newest First</span>

							{sort === "newest" && <Check size={16} />}
						</div>
					</Dropdown.Item>

					<Dropdown.Item id="oldest" onAction={() => setSort("oldest")}>
						<div className="flex items-center justify-between">
							<span>Oldest First</span>

							{sort === "oldest" && <Check size={16} />}
						</div>
					</Dropdown.Item>
				</Dropdown.Menu>
			</Dropdown.Popover>
		</Dropdown>
	);
}
