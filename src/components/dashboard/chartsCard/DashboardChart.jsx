"use client";

import {
	Bar,
	BarChart,
	CartesianGrid,
	Legend,
	Pie,
	PieChart,
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
	return (
		<div className="rounded-3xl border border-zinc-200 bg-background p-6 dark:border-zinc-800">
			<div className="mb-6">
				<h3 className="text-lg font-semibold">{title}</h3>

				{description && (
					<p className="mt-1 text-sm text-zinc-500">{description}</p>
				)}
			</div>

			<div className="h-80">
				<ResponsiveContainer width="100%" height="100%">
					<>
						{/* Bar Chart */}
						{type === "bar" && (
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
						)}

						{/* Pie Chart */}
						{type === "pie" && (
							<PieChart>
								<Pie
									data={data}
									dataKey={dataKey}
									nameKey={xAxisKey}
									cx="50%"
									cy="50%"
									outerRadius={100}
									fill="#8b5cf6"
									label
								/>

								<Tooltip />

								<Legend />
							</PieChart>
						)}
					</>
				</ResponsiveContainer>
			</div>
		</div>
	);
}
