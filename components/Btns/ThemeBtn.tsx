"use client";

import { Monitor, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import MyBtn from "./MyBtn";
import { NavbarButton } from "../ui/resizable-navbar";

export function ThemeBtn() {
	const { setTheme, theme } = useTheme();

	return (
		<DropdownMenu>
			<DropdownMenuTrigger
				render={
					<NavbarButton
						variant="accent"
						className="size-9 flex items-center justify-center"
					>
						{theme === "dark" ? (
							<Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
						) : theme === "light" ? (
							<Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
						) : (
							<Monitor />
						)}

						<span className="sr-only">Toggle theme</span>
					</NavbarButton>
				}
			></DropdownMenuTrigger>
			<DropdownMenuContent align="end">
				<DropdownMenuItem onClick={() => setTheme("light")}>
					<Sun /> <span>Light</span>
				</DropdownMenuItem>
				<DropdownMenuItem onClick={() => setTheme("dark")}>
					<Moon /> <span>Dark</span>
				</DropdownMenuItem>
				<DropdownMenuItem onClick={() => setTheme("system")}>
					<Monitor /> <span>System</span>
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
