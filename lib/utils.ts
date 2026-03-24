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
import { Media } from "@/types/payload";

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

export function getRandomNumber(min: number = 0.3, max: number = 1.0): number {
	// Generate random number, round to 1 decimal, and ensure it's within range
	// const randomValue = Math.random() * (max - min) + min;
	// return Math.round(randomValue * 10) / 10;
	return Math.round(Math.random() * (max - min) + min);
}

const getImageUrl = ({ url, file }: { url?: string; file?: Media }) =>
	url ?? file?.url;
