
import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Royal Enfield",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: null,
    locale: "ru-RU",
    baseUrl: "watisluv1910.github.io/re-classic-350-reborn-maintenance",
    ignorePatterns: ["private", "templates", ".obsidian", "index.md"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Ubuntu Sans",
        code: "Andale Mono",
        body: "Ubuntu Sans",
      },
      colors: {
        lightMode: {
          light: "#faf8f8",          // Off-white background
          lightgray: "#e5e5e5",      // Light gray borders
          gray: "#b8b8b8",           // Medium gray for graph links, heavier borders
          darkgray: "#4e4e4e",       // Dark gray body text (good contrast)
          dark: "#2b2b2b",           // Almost black headers and icons
          secondary: "#EBAB00",      // Mustard Gold – links, current graph node
          tertiary: "#E52E11",       // Neon Red – hover states, visited graph nodes
          highlight: "rgba(235,171,0,0.15)", // Mustard Gold at 15% – internal link/code background
          textHighlight: "rgba(254,36,20,0.4)" // Neon Red at 40% – mark highlights
        },
        darkMode: {
          light: "#161618",          // Dark neutral background
          lightgray: "#393639",      // Dark gray borders
          gray: "#646464",           // Medium gray for graph links, heavier borders
          darkgray: "#d4d4d4",       // Light gray body text
          dark: "#ebebec",           // Near-white headers and icons
          secondary: "#EBAB00",      // Mustard Gold – links, current graph node
          tertiary: "#E52E11",       // Neon Red – hover states, visited graph nodes
          highlight: "rgba(235,171,0,0.25)", // Mustard Gold at 25% – internal link/code background
          textHighlight: "rgba(254,36,20,0.4)" // Neon Red at 40% – mark highlights
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "relative" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
      Plugin.HardLineBreaks()
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
      Plugin.CustomOgImages(),
    ],
  },
}

export default config
