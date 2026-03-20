import { CredentialsProvider } from "@/contexts/credentials.context";
import { getCredentials } from "@/lib/actions/globals.actions";
import { ClerkProvider } from "@clerk/nextjs";
import { ThemeProvider } from "next-themes";
import type { ReactNode } from "react";

export default async function Providers({ children }: { children: ReactNode }) {
	const credentials = await getCredentials();

	return (
		<ThemeProvider
			attribute="class"
			defaultTheme="system"
			enableSystem
			disableTransitionOnChange
		>
			<ClerkProvider>
				<CredentialsProvider credentialsInit={credentials}>
					{children}
				</CredentialsProvider>
			</ClerkProvider>
		</ThemeProvider>
	);
}
