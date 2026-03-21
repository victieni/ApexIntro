"use server";

import config from "@payload-config";
import { getPayload } from "payload";

const payload = await getPayload({ config });

/**
 * @Queries
 */
export const getCredentials = async (): Promise<ICredentials> => {
	try {
		return await payload.findGlobal({
			slug: "credentials",
		});
	} catch (error: any) {
		throw new Error(error);
	}
};

export const getDesign = async () => {
	try {
		return await payload.findGlobal({
			slug: "designs",
		});
	} catch (error: any) {
		throw new Error(error);
	}
};

export const getSections = async () => {
	try {
		return await payload.findGlobal({
			slug: "sections",
		});
	} catch (error: any) {
		throw new Error(error);
	}
};

// export const getCredentials = cache(
//   async (): Promise<ICredentials> => {
//     try {
//       return await payload.findGlobal({
//         slug: "credentials",
//       });
//     } catch (error: any) {
//       throw new Error(error);
//     }
//   },
//   [],
//   {
//     revalidate: 60 * 15,
//     tags: ["credentials"],
//   },
// );
