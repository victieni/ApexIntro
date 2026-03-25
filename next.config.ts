import { withPayload } from "@payloadcms/next/withPayload";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	reactCompiler: true,
	typescript: {
		ignoreBuildErrors: true,
	},
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "images.unsplash.com",
			},
			{
				protocol: "https",
				hostname: "images.pexels.com",
			},
			{
				protocol: "https",
				hostname: "assets.aceternity.com",
			},
			{
				protocol: "https",
				hostname: "i.pinimg.com",
			},
			{
				protocol: "https",
				hostname: "qz3p3fxrgr.ufs.sh",
			},
			{
				protocol: "https",
				hostname: "api.microlink.io",
			},
		],
	},
};

export default withPayload(nextConfig);
