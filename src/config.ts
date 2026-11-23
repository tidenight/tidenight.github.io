import type {
	ExpressiveCodeConfig,
	LicenseConfig,
	NavBarConfig,
	ProfileConfig,
	SiteConfig,
} from "./types/config";
import { LinkPreset } from "./types/config";

export const siteConfig: SiteConfig = {
	title: "月下存档点",
	subtitle: "独立游戏 · 生活手记 · AI 技术",
	lang: "zh_CN",
	themeColor: { hue: 292, fixed: false },
	banner: {
		enable: false, // The homepage uses its own illustration panel.
		src: "/media/moonlit-savepoint.webp",
		position: "center",
		credit: { enable: false, text: "", url: "" },
	},
	toc: { enable: true, depth: 2 },
	favicon: [{ src: "/icons/moon.svg", sizes: "any" }],
};

export const navBarConfig: NavBarConfig = {
	links: [LinkPreset.Home, LinkPreset.Archive, LinkPreset.About],
};

export const profileConfig: ProfileConfig = {
	avatar: "/icons/moon.svg",
	name: "TIDENIGHT",
	bio: "独立游戏、生活手记与 AI 技术笔记。",
	links: [
		{
			name: "GitHub",
			icon: "fa6-brands:github",
			url: "https://github.com/tidenight",
		},
	],
};

export const licenseConfig: LicenseConfig = {
	enable: false,
	name: "",
	url: "",
};

export const expressiveCodeConfig: ExpressiveCodeConfig = { theme: "github-dark" };
