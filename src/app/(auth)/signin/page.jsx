"use client";

import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";

import { authClient } from "@/lib/auth-client";
import { Eye, EyeOff } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";

export default function SignupForm() {
	const [showPassword, setShowPassword] = useState(false);

	const router = useRouter();
	const searchParams = useSearchParams();
	const redirectTo = searchParams.get("redirect") || "/";

	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
	} = useForm({
		defaultValues: {
			email: "",
			password: "",
			rememberMe: false,
		},
	});

	// Register button handler
	const onSubmit = async (formData) => {
		const { data, error } = await authClient.signIn.email({
			email: formData.email,
			password: formData.password,
			rememberMe: formData.rememberMe,
		});

		if (error) {
			toast.error(error.message);
			return;
		}

		if (data) {
			toast.success("Welcome back! You've logged in successfully!");
			router.push(redirectTo);
		}
	};

	// Handle Google Login
	const handleGoogleLogin = async () => {
		await authClient.signIn.social({
			provider: "google",
		});
	};

	return (
		<section className="flex min-h-screen items-center justify-center px-4 py-16">
			<div className=" w-full max-w-xl rounded-3xl border border-zinc-200 bg-background p-8 shadow-sm dark:border-zinc-800">
				{/* Header */}
				<div className="mb-8 text-center">
					<h1 className="text-4xl font-bold">Welcome Back</h1>

					<p className="mt-2 text-zinc-500">
						Sign in to continue your StartupForge journey
					</p>
				</div>

				<form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
					{/* Email */}
					<div>
						<label className="mb-2 block text-sm font-medium">
							Email Address
						</label>

						<input
							type="email"
							placeholder="example@gmail.com"
							{...register("email", {
								required: "Email is required",
								pattern: {
									value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
									message: "Please enter a valid email",
								},
							})}
							className="bg-white dark:bg-zinc-900 h-12 w-full rounded-xl px-4 pr-12 outline-none transition-all focus:ring-4 focus:ring-violet-500"
						/>

						{errors.email && (
							<p className="mt-1 text-sm text-red-500">
								{errors.email.message}
							</p>
						)}
					</div>

					{/* Password */}
					<div>
						<label className="mb-2 block text-sm font-medium">
							Password
						</label>

						<div className="relative">
							<input
								type={showPassword ? "text" : "password"}
								placeholder="Enter password"
								{...register("password", {
									required: "Password is required",
									minLength: {
										value: 6,
										message: "Minimum 6 characters required",
									},
								})}
								className="bg-white dark:bg-zinc-900 h-12 w-full rounded-xl px-4 pr-12 outline-none transition-all focus:ring-4 focus:ring-violet-500"
							/>

							<button
								type="button"
								onClick={() => setShowPassword(!showPassword)}
								className="absolute right-4 top-1/2 -translate-y-1/2"
							>
								{showPassword ? (
									<EyeOff size={18} />
								) : (
									<Eye size={18} />
								)}
							</button>
						</div>

						{errors.password && (
							<p className="mt-1 text-sm text-red-500">
								{errors.password.message}
							</p>
						)}
					</div>

					{/* Forgot and rememberMe */}
					<div className="flex items-center justify-between">
						<label className="flex cursor-pointer items-center gap-2">
							<input
								type="checkbox"
								{...register("rememberMe")}
								className="h-4 w-4 accent-violet-500"
							/>

							<span className="text-sm text-zinc-600 dark:text-zinc-400">
								Remember me
							</span>
						</label>

						<p className="text-sm text-violet-500 hover:underline">
							Forgot Password?
						</p>
					</div>

					{/* Login Button */}
					<button
						type="submit"
						disabled={isSubmitting}
						className="cursor-pointer h-12 mt-3 w-full rounded-xl bg-linear-to-r from-indigo-500 to-violet-500 font-medium text-white transition-all hover:shadow-lg"
					>
						{isSubmitting ? "Signing In..." : "Sign In"}
					</button>
				</form>

				<div className="my-6 flex items-center gap-4">
					<div className="h-px flex-1 bg-zinc-200 dark:bg-zinc-800" />
					<span className="text-sm text-zinc-500">OR</span>
					<div className="h-px flex-1 bg-zinc-200 dark:bg-zinc-800" />
				</div>

				{/* Google Login */}
				<button
					type="button"
					onClick={handleGoogleLogin}
					className="cursor-pointer flex h-12 w-full items-center justify-center gap-3 rounded-xl border border-zinc-200 font-medium transition-all hover:bg-zinc-50 dark:border-zinc-800 dark:hover:bg-zinc-900"
				>
					<FcGoogle size={22} />
					Continue with Google
				</button>

				{/* Create account redirect */}
				<p className="mt-6 text-center text-sm text-zinc-500">
					Don&apos;t have an account?{" "}
					<Link
						href={`/signup?redirect=${redirectTo}`}
						className="font-medium text-violet-500 hover:underline"
					>
						Create Account
					</Link>
				</p>
			</div>
		</section>
	);
}
