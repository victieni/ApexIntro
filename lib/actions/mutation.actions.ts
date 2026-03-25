"use server";

import type { GlobalAfterChangeHook } from "payload";
import { updateTag, revalidateTag } from "next/cache";

/**
 * @mutations
 */
export const updateGlobals: GlobalAfterChangeHook = async ({ data }) => {
	try {
		// updateTag("credentials");
		console.log("💫 After change: ", data);

		revalidateTag("credentials", "max");
	} catch (err: any) {
		throw new Error(err);
	}
};
export const updateSections: GlobalAfterChangeHook = async ({ data }) => {
	try {
		// updateTag("credentials");
		console.log("💫 After change: ", data);

		revalidateTag("sections", "max");
	} catch (err: any) {
		throw new Error(err);
	}
};
export const updateDesigns: GlobalAfterChangeHook = async ({ data }) => {
	try {
		// updateTag("credentials");
		console.log("💫 After change: ", data);

		revalidateTag("designs", "max");
	} catch (err: any) {
		throw new Error(err);
	}
};
