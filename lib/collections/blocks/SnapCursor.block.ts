import type { Block } from "payload";
import { LUCIDE_ICON_NAMES } from "@/constants";

export const SnapCursor: Block = {
	slug: "SnapCursor",
	fields: [
		{ name: "title", type: "text", required: true },
		{ name: "icon", type: "select", options: LUCIDE_ICON_NAMES },
		{ name: "description", type: "textarea" },
		{ name: "highlightText", type: "text" },
		{
			name: "boxes",
			type: "array",
			fields: [{ name: "body", type: "textarea", required: true }],
		},
	],
};
