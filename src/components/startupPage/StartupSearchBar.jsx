"use client";

import {
	Button,
	Description,
	FieldError,
	Form,
	Label,
	SearchField,
} from "@heroui/react";
import React from "react";

import { useRouter, useSearchParams } from "next/navigation";

export default function StartupSearchBar() {
	const router = useRouter();
	const searchParams = useSearchParams();
	const [value, setValue] = React.useState(searchParams.get("search") || "");

	const handleSubmit = (e) => {
		e.preventDefault();
		const params = new URLSearchParams(searchParams);
		if (value.trim()) {
			params.set("search", value.trim());
		} else {
			params.delete("search");
		}
		router.push(`/startups?${params.toString()}`);
	};

	return (
		<Form onSubmit={handleSubmit} className="w-full">
			<div className="flex w-full gap-3">
				<SearchField
					value={value}
					onChange={setValue}
					aria-label="Search Startups"
					className="flex-1"
				>
					<Label className="sr-only">Search Startups</Label>

					<SearchField.Group className=" h-12 rounded-xl bg-background transition-all focus-within:border-violet-500 focus-within:ring-2 focus-within:ring-violet-500/20">
						<SearchField.SearchIcon />

						<SearchField.Input
							placeholder="Search by startup name..."
							className="w-full"
						/>

						<SearchField.ClearButton />
					</SearchField.Group>

					<Description />
					<FieldError />
				</SearchField>

				<Button
					type="submit"
					className="h-12 rounded-xl bg-linear-to-r from-indigo-500 to-violet-500 text-white"
				>
					Search
				</Button>
			</div>
		</Form>
	);
}
