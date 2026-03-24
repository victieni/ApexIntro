import type { Block } from "payload";
import { LUCIDE_ICON_NAMES } from "@/constants";
import { imageFields } from "../Media";

export const ParallaxGridGallery: Block = {
	slug: "ParallaxGridGallery",
	admin: {
		images: {
			thumbnail:
				"https://assets.aceternity.com/cloudinary_bkp/Parallax_Scroll_pzlatw_anfkh7.webp",
		},
	},
	fields: [
		{ name: "title", type: "text", required: true },
		{ name: "icon", type: "select", options: LUCIDE_ICON_NAMES },
		{ name: "description", type: "textarea" },
		{ name: "highlightText", type: "text" },
		{
			name: "images",
			type: "array",
			fields: [
				{ name: "image", type: "group", required: true, fields: imageFields },
			],
		},
	],
};
