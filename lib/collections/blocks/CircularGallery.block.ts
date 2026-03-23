import type { Block } from "payload";
import { LUCIDE_ICON_NAMES } from "@/constants";

export const CircularGallery: Block = {
	slug: "CircularGallery",
	fields: [
		{ name: "title", type: "text", required: true },
		{ name: "icon", type: "select", options: LUCIDE_ICON_NAMES },
		{ name: "description", type: "textarea" },
		{ name: "highlightText", type: "text" },
		{
			name: "cards",
			type: "array",
			fields: [
				{ name: "title", type: "text", required: true },
				{ name: "imageUrl", type: "text", required: true },
			],
		},
	],
};
