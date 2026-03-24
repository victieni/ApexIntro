import type { CollectionConfig, Field } from "payload";

export const Media: CollectionConfig = {
	slug: "media",
	access: {
		read: () => true,
		create: () => true,
		update: () => true,
		delete: () => true,
	},
	fields: [
		{
			name: "alt",
			type: "text",
			required: true,
		},
	],
	upload: true,
};

export const imageFields: Field[] = [
	{ name: "url", type: "text" },
	{ name: "file", type: "upload", relationTo: "media" },
];
