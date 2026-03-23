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
			name: "about",
			type: "group",
			fields: [
				{
					name: "MainText",
					type: "textarea",
					required: true,
					defaultValue: "This is the About section of the ApexInto",
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
					name: "socialMedia",
					type: "group",
					fields: [
						{ name: "twitter", type: "text" },
						{ name: "facebook", type: "text" },
						{ name: "instagram", type: "text" },
						{ name: "youtube", type: "text" },
						{ name: "tiktok", type: "text" },
						{ name: "reddit", type: "text" },
					],
				},
				{
					name: "email",
					type: "text",
					required: true,
					defaultValue: "codeMedic2@gmail.com",
				},
				{
					name: "phone",
					type: "text",
					// required: true,
				},
			],
		},
	],
};
