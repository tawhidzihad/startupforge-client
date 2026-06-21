export default function ProfileInfoCard({
	title,
	value,
	children,
	className = "",
}) {
	return (
		<div
			className={`rounded-2xl border border-zinc-200 p-5 dark:border-zinc-800 ${className}`}
		>
			<h3 className="mb-3 font-semibold">{title}</h3>

			{children ? (
				children
			) : (
				<p className="text-sm leading-7 text-zinc-500">
					{value || `No ${title.toLowerCase()} added yet.`}
				</p>
			)}
		</div>
	);
}
