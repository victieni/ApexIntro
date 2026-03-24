import type { Block } from "payload";
import { LUCIDE_ICON_NAMES } from "@/constants";
import { imageFields } from "../Media";

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
				{ name: "image", type: "group", required: true, fields: imageFields },
			],
		},
	],
};
