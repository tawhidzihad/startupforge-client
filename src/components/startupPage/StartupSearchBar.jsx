"use client";

import { Description, FieldError, Label, SearchField } from "@heroui/react";

export default function StartupSearchBar({ search, setSearch }) {
	return (
		<SearchField
			value={search}
			onChange={setSearch}
			aria-label="Search Startups"
			className="w-full"
		>
			<Label className="sr-only">Search Startups</Label>

			<SearchField.Group className="h-12 rounded-xl bg-background transition-all focus-within:border-violet-500 focus-within:ring-2 focus-within:ring-violet-500/20">
				<SearchField.SearchIcon />

				<SearchField.Input
					placeholder="Search by startup name..."
					className=" focus:outline-none focus:ring-0"
				/>

				<SearchField.ClearButton />
			</SearchField.Group>

			<Description />
			<FieldError />
		</SearchField>
	);
}
