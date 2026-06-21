"use client";

import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";

import { uploadImageToImgbb } from "@/lib/actions/imageUploader";
import { authClient } from "@/lib/auth-client";
import { Eye, EyeOff } from "lucide-react";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";

export default function SignupForm() {
	const [imageUrl, setImageUrl] = useState(null);
	const [showPassword, setShowPassword] = useState(false);
	const [showConfirmPassword, setShowConfirmPassword] = useState(false);

	const router = useRouter();
	const searchParams = useSearchParams();
	const redirectTo = searchParams.get("redirect") || "/signin";

	const {
		register,
		handleSubmit,
		watch,
		formState: { errors, isSubmitting },
	} = useForm({
		defaultValues: {
			name: "",
			email: "",
			role: "",
			password: "",
			confirmPassword: "",
		},
	});

	const password = watch("password") || "";
	const hasMinLength = password.length >= 8;
	const hasUppercase = /[A-Z]/.test(password);
	const hasLowercase = /[a-z]/.test(password);

	// Image uploader
	const handleImageChange = async (e) => {
		const file = e.target.files?.[0];

		if (file) {
			const url = await uploadImageToImgbb(file);
			setImageUrl(url);
		}
	};

	const planMap = {
		collaborator: "collaborator_free",
		founder: "founder_free",
		admin: "admin",
	};

	// Register button handler
	const onSubmit = async (formData) => {
		const { data, error } = await authClient.signUp.email({
			name: formData.name,
			email: formData.email,
			role: formData.role,
			plan: planMap[formData.role],
			password: formData.password,

			...(imageUrl && {
				image: imageUrl,
			}),
		});

		if (error) {
			toast.error(error.message);
			return;
		}

		if (data) {
			toast.success("Your account has been created successfully!");
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
					<h1 className="text-4xl font-bold">Create Account</h1>

					<p className="mt-2 text-zinc-500">Join StartupForge today</p>
				</div>

				<form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
					{/* Name */}
					<div>
						<label className="mb-2 block text-sm font-medium">
							Full Name
						</label>

						<input
							type="text"
							placeholder="John Doe"
							{...register("name", {
								required: "Name is required",
							})}
							className="bg-white dark:bg-zinc-900 h-12 w-full rounded-xl px-4 pr-12 outline-none transition-all focus:ring-4 focus:ring-violet-500"
						/>

						{errors.name && (
							<p className="mt-1 text-sm text-red-500">
								{errors.name.message}
							</p>
						)}
					</div>

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

					{/* Image */}
					<div>
						<label className="mb-2 block text-sm font-medium">
							Profile Image{" "}
							<span className="text-zinc-500">(Optional)</span>
						</label>

						<div className="flex gap-4 flex-row items-center">
							{/* Preview */}
							<div className="h-16 w-16 overflow-hidden rounded-full border border-dashed">
								{imageUrl ? (
									<Image
										src={imageUrl}
										alt="Preview"
										width={64}
										height={64}
										className="h-full w-full object-cover"
									/>
								) : (
									<div className="flex h-full items-center justify-center text-xs text-zinc-400">
										Photo
									</div>
								)}
							</div>

							{/* Upload Button */}
							<div className="flex-1">
								<label
									htmlFor="profile-image"
									className=" flex h-12 w-full cursor-pointer items-center justify-center rounded-xl border border-dashed border-zinc-300 bg-zinc-50 px-4 text-sm font-medium text-zinc-600 transition-all hover:border-violet-500 hover:text-violet-500 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-400"
								>
									Choose Profile Image
								</label>

								<input
									id="profile-image"
									type="file"
									accept="image/*"
									onChange={handleImageChange}
									className="hidden"
								/>
							</div>
						</div>
					</div>

					{/* Role */}
					<div>
						<label className="mb-2 block text-sm font-medium">Role</label>
						<div className="flex items-center gap-6">
							{/* collaborator */}
							<label className="flex cursor-pointer items-center gap-2">
								<input
									type="radio"
									value="collaborator"
									{...register("role", {
										required: "Please select a role",
									})}
									className="h-5 w-5 accent-violet-500"
								/>

								<span className="font-medium">Collaborator</span>
							</label>

							{/* Founder */}
							<label className="flex cursor-pointer items-center gap-2">
								<input
									type="radio"
									value="founder"
									{...register("role", {
										required: "Please select a role",
									})}
									className=" h-5 w-5 accent-violet-500"
								/>

								<span className="font-medium">Founder</span>
							</label>
						</div>

						{errors.role && (
							<p className="mt-2 text-sm text-red-500">
								{errors.role.message}
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
										value: 8,
										message: "Minimum 8 characters required",
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

					{/* Password Rules */}
					<div className="rounded-xl bg-zinc-50 p-4 text-sm dark:bg-zinc-900">
						<p
							className={
								hasMinLength ? "text-green-500" : "text-zinc-500"
							}
						>
							✓ Minimum 8 characters
						</p>

						<p
							className={
								hasUppercase ? "text-green-500" : "text-zinc-500"
							}
						>
							✓ One uppercase letter
						</p>

						<p
							className={
								hasLowercase ? "text-green-500" : "text-zinc-500"
							}
						>
							✓ One lowercase letter
						</p>
					</div>

					{/* Confirm Password */}
					<div>
						<label className="mb-2 block text-sm font-medium">
							Confirm Password
						</label>

						<div className="relative">
							<input
								type={showConfirmPassword ? "text" : "password"}
								placeholder="Confirm password"
								{...register("confirmPassword", {
									required: "Confirm password is required",
									validate: (value) =>
										value === password || "Passwords do not match",
								})}
								className="bg-white dark:bg-zinc-900 h-12 w-full rounded-xl px-4 pr-12 outline-none transition-all focus:ring-4 focus:ring-violet-500"
							/>

							<button
								type="button"
								onClick={() =>
									setShowConfirmPassword(!showConfirmPassword)
								}
								className="absolute right-4 top-1/2 -translate-y-1/2"
							>
								{showConfirmPassword ? (
									<EyeOff size={18} />
								) : (
									<Eye size={18} />
								)}
							</button>
						</div>

						{errors.confirmPassword && (
							<p className="mt-1 text-sm text-red-500">
								{errors.confirmPassword.message}
							</p>
						)}
					</div>

					{/* Sign up button */}
					<button
						type="submit"
						disabled={isSubmitting}
						className="cursor-pointer h-12 mt-3 w-full rounded-xl bg-linear-to-r from-indigo-500 to-violet-500 font-medium text-white transition-all hover:shadow-lg"
					>
						{isSubmitting ? "Creating..." : "Create Account"}
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

				{/* Login page redirect*/}
				<p className="mt-6 text-center text-sm text-zinc-500">
					Already have an account?{" "}
					<Link
						href={`/signin?redirect=${redirectTo}`}
						className="font-medium text-violet-500 hover:underline"
					>
						Login
					</Link>
				</p>
			</div>
		</section>
	);
}
