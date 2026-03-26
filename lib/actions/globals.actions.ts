"use server";

import { unstable_cache as cache, updateTag } from "next/cache";
import config from "@payload-config";
import { getPayload } from "payload";

const payload = await getPayload({ config });

/**
 * @Queries
 */
export const getCredentials = cache(
	async (): Promise<ICredentials> => {
		try {
			return await payload.findGlobal({
				slug: "credentials",
			});
		} catch (error: any) {
			throw new Error(error);
		}
	},
	[],
	{
		revalidate: 60 * 15,
		tags: ["credentials"],
	}
);

export const getDesign = cache(
	async () => {
		try {
			return await payload.findGlobal({
				slug: "designs",
			});
		} catch (error: any) {
			throw new Error(error);
		}
	},
	[],
	{
		revalidate: 60 * 15,
		tags: ["designs"],
	}
);

export const getSections = cache(
	async () => {
		try {
			return await payload.findGlobal({
				slug: "sections",
			});
		} catch (error: any) {
			throw new Error(error);
		}
	},
	[],
	{
		revalidate: 60 * 15,
		tags: ["sections"],
	}
);
