import { LUCIDE_ICON_NAMES } from "@/constants";
import { eHeroBg } from "@/types/enums";
import type { GlobalConfig } from "payload";

export const Credentials: GlobalConfig = {
	slug: "credentials",
	versions: {
		drafts: {
			autosave: {
				interval: 100, // ? Best for optimal live preview.
			},
		},
	},
	fields: [
		{ name: "appTitle", type: "text", required: true },
		{
			name: "hero",
			type: "group",
			fields: [
				{ name: "mainText", type: "textarea", required: true },
				{ name: "highlightText", type: "textarea", required: true },
				{ name: "callToActionText", type: "text", required: true },
				{ name: "callToActionMessage", type: "text", defaultValue: "Welcome to the future." },
				{
					name: "callToActionButtonText",
					type: "text",
					defaultValue: "Get Started",
					required: true,
				},
				{
					name: "heroBg",
					type: "select",
					options: Object.entries(eHeroBg).map(([label, value]) => ({
						label,
						value,
					})),
					defaultValue: eHeroBg.DotGrid,
				},
			],
		},

		{
			name: "navItems",
			type: "array",
			fields: [
				{ name: "name", type: "text", required: true },
				{ name: "link", type: "text", required: true },
				{
					name: "icon",
					type: "select",
					required: true,
					options: LUCIDE_ICON_NAMES,
				},
			],
		},
		{
			name: "contacts",
			type: "group",
			fields: [
				{
					name: "email",
					type: "email",
					required: true,
					unique: true,
					defaultValue: "codeMedic2@gmail.com",
				},
				{
					name: "phone",
					type: "text",
					unique: true,
					// required: true,
				},
				{
					name: "CTA_Object",
					type: "select",
					options: ["Globe3D", "World_map", "GitHub_Globe"],
					defaultValue: "World-map",
				},
				{
					name: "socialMedia",
					type: "array",
					minRows: 1,
					fields: [
						{
							name: "site",
							type: "select",
							options: [
								"twitter",
								"facebook",
								"instagram",
								"youtube",
								"tiktok",
								"reddit",
							],
							required: true,
						},
						{ name: "link", type: "text", required: true },
						{ name: "displayText", type: "text", required: true },
						{ name: "previewUrl", type: "text" },
					],
				},
			],
		},
	],
};
