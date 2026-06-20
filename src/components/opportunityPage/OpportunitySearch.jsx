"use client";

import { useState } from "react";
import { Button, Form, Label, SearchField } from "@heroui/react";
import { useRouter, useSearchParams } from "next/navigation";

export default function OpportunitySearch() {
	const router = useRouter();
	const searchParams = useSearchParams();
	const [search, setSearch] = useState(searchParams.get("search") || "");

	const handleSubmit = (e) => {
		e.preventDefault();

		const params = new URLSearchParams(searchParams);

		if (search.trim()) {
			params.set("search", search.trim());
		} else {
			params.delete("search");
		}

		params.set("page", "1");

		router.push(`/opportunities?${params.toString()}`);
	};

	return (
		<Form onSubmit={handleSubmit} className="w-full">
			<div className="flex w-full flex-col gap-3 sm:flex-row">
				<SearchField
					value={search}
					onChange={setSearch}
					aria-label="Search Opportunities"
					className="flex-1"
				>
					<Label className="sr-only">Search Opportunities</Label>

					<SearchField.Group className=" h-12 rounded-xl bg-background transition-all focus-within:border-violet-500 focus-within:ring-2 focus-within:ring-violet-500/20">
						<SearchField.SearchIcon />

						<SearchField.Input
							placeholder="Search by role title or skills..."
							className="w-full"
						/>

						<SearchField.ClearButton />
					</SearchField.Group>
				</SearchField>

				<Button
					type="submit"
					className=" h-12 min-w-28 bg-linear-to-r from-indigo-500 to-violet-500 font-medium text-white rounded-xl"
				>
					Search
				</Button>
			</div>
		</Form>
	);
}
