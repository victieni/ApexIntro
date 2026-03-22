import { LUCIDE_ICON_NAMES } from "@/constants";
import { eSectionVariants } from "@/types/enums";
import type { GlobalConfig } from "payload";

export const Sections: GlobalConfig = {
	slug: "sections",
	fields: [
		{
			name: "sections",
			type: "array",
			fields: [
				{ name: "title", type: "text", required: true },
				{ name: "icon", type: "select", options: LUCIDE_ICON_NAMES },
				{ name: "description", type: "textarea" },
				{ name: "highlightText", type: "text" },
				{
					name: "variant",
					type: "select",
					options: Object.entries(eSectionVariants).map(([label, value]) => ({
						label,
						value,
					})),
					required: true,
				},
				{
					type: "tabs",
					tabs: [
						{
							name: "CanvasRevealEffect",
							fields: [
								{
									name: "canva",
									type: "array",
									fields: [
										{ name: "title", type: "text", required: true },
										{ name: "description", type: "text" },
										{
											name: "icon",
											type: "select",
											options: LUCIDE_ICON_NAMES,
										},
									],
								},
							],
						},
						{
							name: "SnapCursor",
							fields: [
								{
									name: "boxes",
									type: "array",
									fields: [{ name: "body", type: "textarea", required: true }],
								},
							],
						},
						{
							name: "BentoGrid",
							fields: [
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
						},
						{
							name: "MagicBento",
							fields: [
								{
									name: "items",
									type: "array",
									fields: [
										// ? Test props
										// { name: "color", type: "text" },
										{ name: "title", type: "text" },
										{ name: "description", type: "text" },
										{ name: "label", type: "text" },
										{ name: "textAutoHide", type: "checkbox" },
										{ name: "disableAnimations", type: "checkbox" },
									],
								},
							],
						},
						{
							name: "AnimatedTestimonials",
							fields: [
								{
									name: "testimonials",
									type: "array",
									fields: [
										{ name: "name", type: "text", required: true },
										{
											name: "designation",
											type: "text",
											required: true,
											defaultValue: "client",
										},
										{ name: "quote", type: "textarea", required: true },
										{ name: "imageUrl", type: "text" },
									],
								},
							],
						},

						{
							name: "AnimatedTabs",
							fields: [
								{
									name: "tabs",
									type: "array",
									fields: [
										{ name: "tabName", type: "text", required: true },
										{ name: "title", type: "text", required: true },
										{ name: "imageUrl", type: "text", required: true },
									],
								},
							],
						},
						{
							name: "AppleCardsCarousel",
							fields: [
								{
									name: "cards",
									type: "array",
									fields: [
										{ name: "category", type: "text" },
										{ name: "title", type: "text" },
										{ name: "imageUrl", type: "text" },
										// {name: "content", type: "text"},
									],
								},
							],
						},
					],
				},
				{
					type: "tabs",
					tabs: [
						{
							name: "Marquee3DGallery",
							fields: [
								{
									name: "images",
									type: "array",
									fields: [{ name: "imageUrl", type: "text" }],
								},
							],
						},
						{
							name: "FocusCardsGallery",
							fields: [
								{
									name: "cards",
									type: "array",
									fields: [
										{ name: "title", type: "text", required: true },
										{ name: "imageUrl", type: "text", required: true },
									],
								},
							],
						},
						{
							name: "CircularGallery",
							fields: [
								{
									name: "cards",
									type: "array",
									fields: [
										{ name: "title", type: "text", required: true },
										{ name: "imageUrl", type: "text", required: true },
									],
								},
							],
						},
						{ name: "SpotLightCards", fields: [] },
						{
							name: "ParallaxGridGallery",
							fields: [
								{
									name: "images",
									type: "array",
									fields: [{ name: "imageUrl", type: "text", required: true }],
								},
							],
						},
						{
							name: "MarqueeStandard",
							fields: [
								{
									name: "orientation",
									type: "radio",
									options: ["horizontal", "vertical"],
									defaultValue: "horizontal",
								},
								{
									name: "cards",
									type: "array",
									fields: [
										{ name: "name", type: "text", required: true },
										{ name: "username", type: "text", required: true },
										{ name: "body", type: "text", required: true },
										{ name: "imgUrl", type: "text", required: true },
									],
								},
							],
						},
					],
				},
			],
		},
	],
};
