"use client";

import { useState, type ComponentProps } from "react";
import { ThemeBtn } from "../Btns/ThemeBtn";
import {
	MobileNav,
	MobileNavHeader,
	MobileNavMenu,
	MobileNavToggle,
	Navbar,
	NavbarButton,
	NavbarLogo,
	NavBody,
	NavItems,
} from "../ui/resizable-navbar";
import { useCredentials } from "@/contexts/credentials.context";
import Link from "next/link";
import { DynamicIcon } from "lucide-react/dynamic";

export default function AppNavbar({
	className,
}: // ...props
ComponentProps<"nav">) {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	const {
		credentials: { navItems },
	} = useCredentials();

	return (
		<Navbar className={className}>
			<NavBody>
				<NavbarLogo />

				<NavItems items={navItems!} />

				<div className="flex items-center gap-3">
					<NavbarButton variant={"accent"}>Sign In</NavbarButton>
					{/* <ThemeBtn /> */}
				</div>
			</NavBody>

			<MobileNav>
				<MobileNavHeader>
					<NavbarLogo />
					<MobileNavToggle
						isOpen={isMobileMenuOpen}
						onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
					/>
				</MobileNavHeader>

				<MobileNavMenu
					isOpen={isMobileMenuOpen}
					onClose={() => setIsMobileMenuOpen(false)}
				>
					{navItems!.map((item, idx) => (
						<Link
							key={`mobile-link-${idx}`}
							href={item.link}
							onClick={() => setIsMobileMenuOpen(false)}
							className="relative flex items-center gap-x-1 justify-between"
						>
							<DynamicIcon name={item.icon} size={20} />
							<span className="relative z-20">{item.name}</span>
						</Link>
					))}
					<div className="flex w-full flex-col gap-4">
						<NavbarButton
							onClick={() => setIsMobileMenuOpen(false)}
							variant={"accent"}
							// as={"button"}
						>
							Sign In
						</NavbarButton>
						{/* <ThemeBtn /> */}
					</div>
				</MobileNavMenu>
			</MobileNav>
		</Navbar>
	);

	// return (
	// 	<nav
	// 		{...props}
	// 		className={cn(
	// 			"flex items-center justify-between p-2 my-3 mx-auto border-2 rounded-xl w-[90%]",
	// 			className
	// 		)}
	// 	>
	// 		<div>
	// 			<Logo />
	// 		</div>
	// 		<div>
	// 			<ThemeBtn />
	// 		</div>
	// 	</nav>
	// );
}
