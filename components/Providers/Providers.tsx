import type { ReactNode } from "react";
import { CredentialsProvider } from "@/contexts/credentials.context";
import { DesignProvider } from "@/contexts/design.context";
import { getCredentials, getDesign } from "@/lib/actions/globals.actions";
import { ClerkProvider } from "@clerk/nextjs";
import { ThemeProvider } from "next-themes";

export default async function Providers({ children }: { children: ReactNode }) {
	const credentials = await getCredentials();
		const design = await getDesign();
	

	return (
		<ThemeProvider
			attribute="class"
			defaultTheme="system"
			enableSystem
			disableTransitionOnChange
		>
			<ClerkProvider>
				<CredentialsProvider credentialsInit={credentials}>
					<DesignProvider designInit={design}>{children}</DesignProvider>
				</CredentialsProvider>
			</ClerkProvider>
		</ThemeProvider>
	);
}
