"use client";

import {
	Bar,
	BarChart,
	CartesianGrid,
	Cell,
	Legend,
	Line,
	LineChart,
	Pie,
	PieChart,
	ResponsiveContainer,
	Tooltip,
	XAxis,
	YAxis,
} from "recharts";

const COLORS = ["#6366f1", "#8b5cf6", "#a855f7", "#c084fc"];

export default function DashboardChart({
	title,
	description,
	type = "bar",
	data = [],
	dataKey,
	xAxisKey,
}) {
	return (
		<div className=" rounded-3xl border border-zinc-200 bg-background p-6 dark:border-zinc-800">
			<div className="mb-6">
				<h3 className="font-semibold text-lg">{title}</h3>

				{description && (
					<p className="mt-1 text-sm text-zinc-500">{description}</p>
				)}
			</div>

			<div className="h-80">
				<ResponsiveContainer width="100%" height="100%">
					<>
						{/* Bar Chart */}
						{type === "bar" && (
							<BarChart data={data}>
								<CartesianGrid strokeDasharray="3 3" />

								<XAxis dataKey={xAxisKey} />

								<YAxis />

								<Tooltip />

								<Legend />

								<Bar
									dataKey={dataKey}
									radius={[8, 8, 0, 0]}
									fill="#8b5cf6"
								/>
							</BarChart>
						)}

						{/* Line Chart */}
						{type === "line" && (
							<LineChart data={data}>
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
								/>
							</LineChart>
						)}

						{/* Pie Chart */}
						{type === "pie" && (
							<PieChart>
								<Tooltip />

								<Legend />

								<Pie
									data={data}
									dataKey={dataKey}
									nameKey={xAxisKey}
									outerRadius={100}
								>
									{data.map((entry, index) => (
										<Cell
											key={index}
											fill={COLORS[index % COLORS.length]}
										/>
									))}
								</Pie>
							</PieChart>
						)}
					</>
				</ResponsiveContainer>
			</div>
		</div>
	);
}
