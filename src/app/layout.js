import dns from "node:dns";
dns.setDefaultResultOrder("ipv4first");
dns.setServers(["8.8.8.8", "8.8.4.4"]);

import NextThemeProvider from "@/providers/NextThemeProvider";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "./globals.css";

const inter = Inter({
	subsets: ["latin"],
});

export const metadata = {
	title: "StartupForge - Startup Team Builder Platform",
	description: "StartupForge - Startup Team Builder Platform",
};

export default function RootLayout({ children }) {
	return (
		<html
			lang="en"
			suppressHydrationWarning
			className={`${inter.className} h-full antialiased`}
		>
			<body className="min-h-full flex flex-col bg-background text-foreground">
				<NextThemeProvider>{children}</NextThemeProvider>
				<Toaster position="top-center" reverseOrder={false} />
			</body>
		</html>
	);
}
