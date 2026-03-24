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

export default async function ContactsSection() {
	const { contacts } = await getCredentials();

  switch (contacts.) {
    case
  }
}

ContactsSection.Main = ({contacts}: {contacts: IContacts}) => {

  return <div className="flex flex-col md:flex-row gap-4">
			<div>
				<Heading>
					<Headset />
					<span>Contacts</span>
				</Heading>

				<div className="flex items-center gap-3">
					<div>
						<div className="flex items-center gap-x-2">
							<p className="">
								<Mail />
							</p>
							<p className="font-medium">{contacts.email}</p>
						</div>

						<div>
							<p className="font-medium text-lg">Socials</p>

							<div className="flex items-center gap-3 flex-wrap">
								{contacts.socialMedia!.map((s) => (
									<LinkPreview
										key={s.id}
										url={s.previewUrl!}
										className="font-medium flex items-center gap-x-1"
									>
										{s.site === "facebook" ? (
											<IconBrandFacebook />
										) : s.site === "instagram" ? (
											<IconBrandInstagram />
										) : s.site === "reddit" ? (
											<IconBrandReddit />
										) : s.site === "tiktok" ? (
											<IconBrandTiktok />
										) : s.site === "twitter" ? (
											<IconBrandTwitter />
										) : (
											<IconBrandYoutube />
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
}

ContactsSection.Globe3D = () => {
  return <></>
}