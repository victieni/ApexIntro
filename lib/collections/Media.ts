import type { CollectionConfig, Field } from "payload";

export const Media: CollectionConfig = {
	slug: "media",
	access: {
		read: () => true,
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

export const image:Field[] = [
  
]