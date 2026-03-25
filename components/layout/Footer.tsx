import { poppinsFont } from "@/app/fonts";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

export default function Footer() {
	return (
		<div
			className={cn(
				"flex flex-col sm:flex-row items-center justify-between gap-3 p-1 bg-fuchsia-900 text-white",
				poppinsFont.className
			)}
		>
			<p className="text-sm sm:text-base hidden sm:block cursor-target">🤙+254-79-5509-620</p>

			<div className="flex items-center gap-1 cursor-target">
				<Image
					src="/assets/CM_logo.png"
					alt="CodeMedic_logo"
					width={999}
					height={999}
					className="size-6 sm:size-10 rounded-full"
				/>
				<p className="font-medium">⚕️CodeMedic💊</p>
			</div>

			<div className="sm:hidden flex items-center justify-between gap-1 cursor-target">
				<p className="text-sm sm:text-base hidden">🤙+25479-5509-620</p>
				<p className="text-sm sm:text-base">✉️codemedic2@gmail.com</p>
			</div>

			<p className="hidden sm:block text-sm sm:text-base cursor-target">✉️codemedic2@gmail.com</p>
		</div>
	);
}
