import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import path from "path";
import { fileURLToPath } from "url";
import { buildConfig } from "payload";
import sharp from "sharp";

import { Sections } from "./lib/collections/globals/sections.global";
import { Media } from "./lib/collections/Media";
import { Users } from "./lib/collections/Users";
import { Credentials } from "./lib/collections/globals/Credentials.global";
import { Design } from "./lib/collections/globals/Design.global";
import { uploadthingStorage } from "@payloadcms/storage-uploadthing";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
	admin: {
		user: Users.slug,
		components: {
			graphics: {
				Icon: {
					path: "/components/CMS/Logo.tsx",
				},
				Logo: {
					path: "/components/CMS/Logo.tsx",
				},
			},
		},
		importMap: {
			baseDir: path.resolve(dirname),
		},
		livePreview: {
			url: process.env.NEXT_PUBLIC_PAYLOAD_URL,
			globals: ["sections", "credentials", "designs"],
			breakpoints: [
				{
					label: "Mobile",
					name: "mobile",
					width: 375,
					height: 667,
				},
				{
					label: "Tablet",
					name: "tablet",
					width: 768,
					height: 1024,
				},
				{
					label: "Desktop",
					name: "desktop",
					width: 1440,
					height: 900,
				},
			],
		},
	},
	globals: [Sections, Credentials, Design],
	collections: [Users, Media],
	editor: lexicalEditor(),
	secret: process.env.PAYLOAD_SECRET || "",
	serverURL: process.env.NEXT_PUBLIC_PAYLOAD_URL || "",
	typescript: {
		outputFile: path.resolve(dirname, "./types/payload.d.ts"),
	},
	db: mongooseAdapter({
		url: process.env.DATABASE_URL || "",
	}),
	sharp,
	plugins: [
		uploadthingStorage({
			collections: {
				media: true,
			},
			options: {
				token: process.env.UPLOADTHING_TOKEN,
				acl: "public-read",
			},
		}),
	],
});
