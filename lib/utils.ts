import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import {
	audioWideFont,
	geistFont,
	interFont,
	jimNightShadeFont,
	keniaFont,
	keniaOneFont,
	montserratFont,
	petitFormalScriptFont,
	poppinsFont,
	robotoFont,
	sairaStencilOneFont,
	wallPoetFont,
} from "@/app/fonts";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export const getHeaderFont = (headerFont: IDesign["headerFont"]) => {
	switch (headerFont) {
		case "Jim_Nightshade":
			return jimNightShadeFont;
		case "Keania_One":
			return keniaOneFont;
		case "Petit_Formal_Script":
			return petitFormalScriptFont;
		case "Saira_Stencil_One":
			return sairaStencilOneFont;
		case "Wallpoet":
			return wallPoetFont;
		case "audioWide":
			return audioWideFont;

		default:
			return keniaFont;
	}
};

export const getAppFont = (appFont: IDesign["appFont"]) => {
	switch (appFont) {
		case "Inter":
			return interFont;
		case "Geist":
			return geistFont;
		case "Montserrat":
			return montserratFont;
		case "Roboto":
			return robotoFont;

		default:
			return poppinsFont;
	}
};
