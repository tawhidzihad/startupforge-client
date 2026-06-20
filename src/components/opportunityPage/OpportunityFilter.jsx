"use client";

import { Dropdown } from "@heroui/react";
import { useRouter, useSearchParams } from "next/navigation";

import { ChevronsUpDown, Filter } from "lucide-react";

export default function OpportunityFilter() {
	const router = useRouter();
	const searchParams = useSearchParams();
	const workType = searchParams.get("workType") || "";
	const industry = searchParams.get("industry") || "";

	const updateFilter = (key, value) => {
		const params = new URLSearchParams(searchParams);
		if (value) {
			params.set(key, value);
		} else {
			params.delete(key);
		}

		params.set("page", "1");

		router.push(`/opportunities?${params.toString()}`);
	};

	const filterTriggerClass = ` inline-flex h-12 min-w-40 cursor-pointer items-center justify-between gap-3 rounded-xl bg-background px-4 text-sm font-medium transition-all duration-200 hover:bg-violet-500/5`;

	return (
		<div className="flex flex-wrap gap-3">
			{/* Work Type */}
			<Dropdown>
				<Dropdown.Trigger>
					<div className={filterTriggerClass}>
						<div className="flex items-center gap-2">
							<Filter size={16} className="text-zinc-500" />

							<span>{workType || "Work Type"}</span>
						</div>

						<ChevronsUpDown size={14} className="text-zinc-500" />
					</div>
				</Dropdown.Trigger>

				<Dropdown.Popover>
					<Dropdown.Menu onAction={(key) => updateFilter("workType", key)}>
						<Dropdown.Item id="">All Work Types</Dropdown.Item>

						<Dropdown.Item id="Remote">Remote</Dropdown.Item>

						<Dropdown.Item id="Hybrid">Hybrid</Dropdown.Item>

						<Dropdown.Item id="On-site">On-site</Dropdown.Item>
					</Dropdown.Menu>
				</Dropdown.Popover>
			</Dropdown>

			{/* Industry */}
			<Dropdown>
				<Dropdown.Trigger>
					<div className={filterTriggerClass}>
						<span>{industry || "Industry"}</span>

						<ChevronsUpDown size={14} className="text-zinc-500" />
					</div>
				</Dropdown.Trigger>

				<Dropdown.Popover>
					<Dropdown.Menu onAction={(key) => updateFilter("industry", key)}>
						<Dropdown.Item id="">All Industries</Dropdown.Item>
						<Dropdown.Item id="SaaS">SaaS</Dropdown.Item>
						<Dropdown.Item id="FinTech">FinTech</Dropdown.Item>
						<Dropdown.Item id="HealthTech">HealthTech</Dropdown.Item>
						<Dropdown.Item id="EdTech">EdTech</Dropdown.Item>
						<Dropdown.Item id="AI">AI</Dropdown.Item>
						<Dropdown.Item id="Other">Other</Dropdown.Item>
					</Dropdown.Menu>
				</Dropdown.Popover>
			</Dropdown>
		</div>
	);
}
