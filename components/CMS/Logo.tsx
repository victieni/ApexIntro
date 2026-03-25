import Image from "next/image";

export default function Logo() {
	return (
		<Image
			src={"/assets/CM_logo.png"}
			alt="CodeMedic-logo"
			width={500}
			height={500}
			className="rounded-full object-cover"
		/>
	);
}
