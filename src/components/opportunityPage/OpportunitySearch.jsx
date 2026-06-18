"use client";

import { Description, FieldError, Label, SearchField } from "@heroui/react";

export default function OpportunitySearch({ search, setSearch }) {
	return (
		<SearchField
			value={search}
			onChange={setSearch}
			aria-label="Search Opportunities"
			className="w-full"
		>
			<Label className="sr-only">Search Opportunities</Label>

			<SearchField.Group className="h-12 rounded-xl bg-background transition-all focus-within:border-violet-500 focus-within:ring-2 focus-within:ring-violet-500/20">
				<SearchField.SearchIcon />

				<SearchField.Input
					placeholder="Search by role title or skills..."
					className="focus:outline-none focus:ring-0"
				/>

				<SearchField.ClearButton />
			</SearchField.Group>

			<Description />
			<FieldError />
		</SearchField>
	);
}
