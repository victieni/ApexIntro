import type { Block } from "payload";
import { LUCIDE_ICON_NAMES } from "@/constants";

export const Marquee3DGallery: Block = {
	slug: "Marquee3DGallery",
	fields: [
		{ name: "title", type: "text", required: true },
		{ name: "icon", type: "select", options: LUCIDE_ICON_NAMES },
		{ name: "description", type: "textarea" },
		{ name: "highlightText", type: "text" },
		{
			name: "images",
			type: "array",
			fields: [{ name: "imageUrl", type: "text" }],
		},
	],
};
