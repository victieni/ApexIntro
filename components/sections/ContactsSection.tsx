import { getCredentials } from "@/lib/actions/globals.actions";
import WorldMap from "../ui/world-map";
import Heading from "../layout/Heading";
import { Headset, Mail } from "lucide-react";
import { LinkPreview } from "../ui/link-preview";
import {
	IconBrandFacebook,
	IconBrandInstagram,
	IconBrandReddit,
	IconBrandTiktok,
	IconBrandTwitter,
	IconBrandYoutube,
} from "@tabler/icons-react";
import { GithubGlobeSection } from "./GithubGlobeSection";
import { Globe3DSection } from "./Globe3DSection";
import { WorldMapSection } from "./WorldMapSection";
import { cn } from "@/lib/utils";

export default async function ContactsSection() {
	const { contacts } = await getCredentials();

	switch (contacts.CTA_Object) {
		case "GitHub_Globe":
			return (
				<GithubGlobeSection>
					<ContactsSection.Main contacts={contacts} />
				</GithubGlobeSection>
			);
		case "Globe3D":
			return (
				<Globe3DSection>
					<ContactsSection.Main contacts={contacts} />
				</Globe3DSection>
			);
		case "World_map":
			return (
				<WorldMapSection>
					<ContactsSection.Main contacts={contacts} />
				</WorldMapSection>
			);

		default:
			return <></>;
	}
}

ContactsSection.Main = ({
	contacts,
	className,
}: {
	contacts: IContacts;
	className?: string;
}) => {
	return (
		<div className={cn("flex flex-col md:flex-row gap-4 space-y-4", className)}>
			<div>
				<Heading>
					<Headset />
					<span>Contact Us</span>
				</Heading>

				<div className="flex items-center gap-3">
					<div>
						<div className="flex items-center gap-x-2">
							<p className="">
								<Mail />
							</p>
							<p className="font-medium">{contacts.email}</p>
						</div>

						<div className="mt-3">
							<p className="font-medium text-xl ">Socials</p>

							<div
								className={cn(
									"flex  items-center gap-4 flex-wrap",

									contacts.CTA_Object === "GitHub_Globe" && "",
									// contacts.CTA_Object === "Globe3D" && "flex-row",
									contacts.CTA_Object === "World_map" && ""
								)}
							>
								{contacts.socialMedia!.map((s) => (
									<LinkPreview
										key={s.id}
										url={s.previewUrl!}
										className="font-medium hover:text-primary! hover:underline flex items-center gap-x-1"
									>
										{s.site === "facebook" ? (
											<IconBrandFacebook />
										) : s.site === "instagram" ? (
											<IconBrandInstagram color="pink" />
										) : s.site === "reddit" ? (
											<IconBrandReddit color={"orange"} />
										) : s.site === "tiktok" ? (
											<IconBrandTiktok />
										) : s.site === "twitter" ? (
											<IconBrandTwitter />
										) : (
											<IconBrandYoutube color="red" />
										)}

										<span>{s.displayText}</span>
									</LinkPreview>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

ContactsSection.Globe3D = () => {
	return <></>;
};
