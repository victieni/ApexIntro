import type { Block } from "payload";
import { LUCIDE_ICON_NAMES } from "@/constants";

export const MagicBento: Block = {
	slug: "MagicBento",
	fields: [
		{ name: "title", type: "text", required: true },
		{ name: "icon", type: "select", options: LUCIDE_ICON_NAMES },
		{ name: "description", type: "textarea" },
		{ name: "highlightText", type: "text" },
		{
			name: "items",
			type: "array",
			fields: [
				{ name: "title", type: "text" },
				{ name: "description", type: "text" },
				{ name: "label", type: "text" },
				{ name: "textAutoHide", type: "checkbox" },
				{ name: "disableAnimations", type: "checkbox" },
			],
		},
	],
};
