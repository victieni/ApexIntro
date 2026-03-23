import type { Block } from "payload";
import { LUCIDE_ICON_NAMES } from "@/constants";

export const BentoGrid: Block = {
	slug: "BentoGrid",
	admin: {
		images: {
			thumbnail: "https://assets.aceternity.com/cloudinary_bkp/bento-2.webp",
		},
	},
	fields: [
		{ name: "title", type: "text", required: true },
		{ name: "icon", type: "select", options: LUCIDE_ICON_NAMES },
		{ name: "description", type: "textarea" },
		{ name: "highlightText", type: "text" },
		{
			name: "items",
			type: "array",
			fields: [
				{ name: "title", type: "text", required: true },
				{ name: "description", type: "textarea", required: true },
				{ name: "header", type: "text" },
				{
					name: "icon",
					type: "select",
					options: LUCIDE_ICON_NAMES,
				},
			],
		},
	],
};
