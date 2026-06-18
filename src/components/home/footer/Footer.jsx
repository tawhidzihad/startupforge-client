import Image from "next/image";
import Link from "next/link";

import { Mail, MapPin, Phone } from "lucide-react";
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
	const year = new Date().getFullYear();

	return (
		<footer className="border-t border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950">
			<div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-0">
				<div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
					{/* Logo & About */}
					<div>
						<Link href="/">
							<Image
								src="/images/logo.png"
								alt="StartupForge"
								width={10000}
								height={10000}
								className="w-auto h-12"
							/>
						</Link>

						<p className="mt-4 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
							Connect founders with talented collaborators and build the
							next great startup together.
						</p>
					</div>

					{/* Quick Links */}
					<div>
						<h3 className="mb-4 text-lg font-semibold">Quick Links</h3>

						<ul className="space-y-3">
							<li>
								<Link
									href="/"
									className="text-zinc-600 transition-colors hover:text-violet-500 dark:text-zinc-400"
								>
									Home
								</Link>
							</li>

							<li>
								<Link
									href="/startups"
									className="text-zinc-600 transition-colors hover:text-violet-500 dark:text-zinc-400"
								>
									Browse Startups
								</Link>
							</li>

							<li>
								<Link
									href="/opportunities"
									className="text-zinc-600 transition-colors hover:text-violet-500 dark:text-zinc-400"
								>
									Browse Opportunities
								</Link>
							</li>

							<li>
								<Link
									href="/login"
									className="text-zinc-600 transition-colors hover:text-violet-500 dark:text-zinc-400"
								>
									Login
								</Link>
							</li>
						</ul>
					</div>

					{/* Contact Information */}
					<div>
						<h3 className="mb-4 text-lg font-semibold">
							Contact Information
						</h3>

						<ul className="space-y-4 text-sm text-zinc-600 dark:text-zinc-400">
							<li className="flex items-start gap-3">
								<MapPin size={18} />
								<span>Dhaka, Bangladesh</span>
							</li>

							<li className="flex items-center gap-3">
								<Mail size={18} />
								<span>support@startupforge.com</span>
							</li>

							<li className="flex items-center gap-3">
								<Phone size={18} />
								<span>+880 1234-567890</span>
							</li>
						</ul>
					</div>

					{/* Social Links */}
					<div>
						<h3 className="mb-4 text-lg font-semibold">Social Links</h3>

						<div className="flex flex-wrap gap-3">
							<Link
								href="#"
								className="rounded-lg border border-zinc-200 p-2 transition-all hover:border-violet-500 hover:text-violet-500 dark:border-zinc-800"
							>
								<FaFacebookF size={18} />
							</Link>

							<Link
								href="#"
								className="rounded-lg border border-zinc-200 p-2 transition-all hover:border-violet-500 hover:text-violet-500 dark:border-zinc-800"
							>
								<FaXTwitter size={18} />
							</Link>

							<Link
								href="#"
								className="rounded-lg border border-zinc-200 p-2 transition-all hover:border-violet-500 hover:text-violet-500 dark:border-zinc-800"
							>
								<FaLinkedinIn size={18} />
							</Link>

							<Link
								href="#"
								className="rounded-lg border border-zinc-200 p-2 transition-all hover:border-violet-500 hover:text-violet-500 dark:border-zinc-800"
							>
								<FaGithub size={18} />
							</Link>
						</div>
					</div>
				</div>

				{/* Bottom */}
				<div className="mt-12 border-t border-zinc-200 pt-6 dark:border-zinc-800">
					<p className="text-center text-sm text-zinc-500">
						© {year} StartupForge. All rights reserved.
					</p>
				</div>
			</div>
		</footer>
	);
}
