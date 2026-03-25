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
	bowlyOneFont,
	spicyRiceFont,
	kavoonFont,
	notableFont,
	fascinateFont,
	orbitronFont,
	zenDotsFont,
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
		case "Bowlby_One":
			return bowlyOneFont;
		case "Fascinate":
			return fascinateFont;
		case "Kavoon":
			return kavoonFont;
		case "Notable":
			return notableFont;
		case "Orbitron":
			return orbitronFont;
		case "Spicy_Rice":
			return spicyRiceFont;
		case "Zen_Dots":
			return zenDotsFont;

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
	return Math.round(Math.random() * (max - min) + min);
}

export const getImageUrl = (image: Media | string) => {
	if (typeof image === "string") {
		return image;
	} else if (typeof image === "object") {
		return `${process.env.NEXT_PUBLIC_UPLOADTHING_FILE_DOMAIN}/f/${image._key}`;
	}
};
