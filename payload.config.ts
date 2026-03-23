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

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
	admin: {
		user: Users.slug,
		importMap: {
			baseDir: path.resolve(dirname),
		},
		livePreview: {
			url: "http://localhost:3000",
			globals: ["sections"],
		},
	},
	globals: [Sections, Credentials, Design],
	collections: [Users, Media],
	editor: lexicalEditor(),
	secret: process.env.PAYLOAD_SECRET || "",
	typescript: {
		outputFile: path.resolve(dirname, "./types/payload.d.ts"),
	},
	db: mongooseAdapter({
		url: process.env.DATABASE_URL || "",
	}),
	sharp,
	plugins: [],
});
