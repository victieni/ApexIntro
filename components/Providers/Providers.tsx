import { CredentialsProvider } from "@/contexts/credentials.context";
import { DesignProvider } from "@/contexts/design.context";
import { getCredentials, getDesign } from "@/lib/actions/globals.actions";
import { ThemeProvider } from "next-themes";
import type { ReactNode } from "react";

export default async function Providers({ children }: { children: ReactNode }) {
	const credentials = await getCredentials();
	const design = await getDesign();

	console.log("🛎️ credentials:", credentials);
	console.log("🛎️ designs:", design);

	return (
		<ThemeProvider
			attribute="class"
			defaultTheme="system"
			enableSystem
			disableTransitionOnChange
		>
			{/* <ClerkProvider> */}
			<CredentialsProvider credentialsInit={credentials}>
				<DesignProvider designInit={design}>{children}</DesignProvider>
			</CredentialsProvider>
			{/* </ClerkProvider> */}
		</ThemeProvider>
	);
}
