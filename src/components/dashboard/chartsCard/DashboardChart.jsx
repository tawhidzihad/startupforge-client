"use client";

import { useEffect, useState } from "react";
import {
	Bar,
	BarChart,
	CartesianGrid,
	Legend,
	Line,
	LineChart,
	ResponsiveContainer,
	Tooltip,
	XAxis,
	YAxis,
} from "recharts";

export default function DashboardChart({
	title,
	description,
	type = "bar",
	data = [],
	dataKey,
	xAxisKey,
}) {
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return (
			<div className="w-full rounded-3xl border border-zinc-200 bg-background p-6 dark:border-zinc-800">
				<div className="h-80 w-full bg-zinc-50 dark:bg-zinc-900 animate-pulse rounded-2xl" />
			</div>
		);
	}

	return (
		<div className="w-full min-w-0 rounded-3xl border border-zinc-200 bg-background p-6 dark:border-zinc-800">
			<div className="mb-6">
				<h3 className="text-lg font-semibold">{title}</h3>

				{description && (
					<p className="mt-1 text-sm text-zinc-500">{description}</p>
				)}
			</div>

			{/* এখানে width কে ১০০% এর বদলে ৯৯% করা হয়েছে (এটি Recharts এর একটি অফিশিয়াল ট্রিক)।
           প্যারেন্ট গ্রিড রিসাইজ হলেও চার্ট ক্র্যাশ করবে না।
         */}
			<div className="h-80 w-full">
				{/* Bar Chart */}
				{type === "bar" && (
					<ResponsiveContainer width="99%" height={320}>
						<BarChart
							data={data}
							margin={{
								top: 20,
								right: 20,
								left: 0,
								bottom: 5,
							}}
						>
							<CartesianGrid strokeDasharray="3 3" />

							<XAxis dataKey={xAxisKey} />

							<YAxis />

							<Tooltip />

							<Legend />

							<Bar
								dataKey={dataKey}
								fill="#8b5cf6"
								radius={[8, 8, 0, 0]}
							/>
						</BarChart>
					</ResponsiveContainer>
				)}

				{/* Line Chart */}
				{type === "line" && (
					<ResponsiveContainer width="99%" height={320}>
						<LineChart
							data={data}
							margin={{
								top: 20,
								right: 20,
								left: 0,
								bottom: 5,
							}}
						>
							<CartesianGrid strokeDasharray="3 3" />

							<XAxis dataKey={xAxisKey} />

							<YAxis />

							<Tooltip />

							<Legend />

							<Line
								type="monotone"
								dataKey={dataKey}
								stroke="#8b5cf6"
								strokeWidth={3}
								dot={{
									r: 5,
								}}
								activeDot={{
									r: 8,
								}}
							/>
						</LineChart>
					</ResponsiveContainer>
				)}
			</div>
		</div>
	);
}
