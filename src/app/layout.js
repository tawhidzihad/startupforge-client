import NextThemeProvider from "@/providers/NextThemeProvider";
import { Inter } from "next/font/google";
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
			</body>
		</html>
	);
}
