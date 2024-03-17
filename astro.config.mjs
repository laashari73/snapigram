import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import AutoImport from "astro-auto-import";
import { defineConfig, squooshImageService } from "astro/config";
import remarkCollapse from "remark-collapse";
import remarkToc from "remark-toc";
import config from "./src/config/config.json";
import astroI18next from "astro-i18next";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  site: config.site.base_url
    ? config.site.base_url
    : "https://snapinsta.org/",
  base: config.site.base_path ? config.site.base_path : "/",
  trailingSlash: config.site.trailing_slash ? "ignore" : "never",
  image: {
    service: squooshImageService(),
  },
  redirects: {
    // "/download/": {
    //   status: 301,
    //   destination: "/download",
    // },
    "/fr": {
      status: 301,
      destination: "/fr/",
    },
    "/de": {
      status: 301,
      destination: "/de/",
    },
    "/es": {
      status: 301,
      destination: "/es/",
    },
    "/hi": {
      status: 301,
      destination: "/hi/",
    },
    "/id": {
      status: 301,
      destination: "/id/",
    },
    "/pt": {
      status: 301,
      destination: "/pt/",
    },
    "/ko": {
      status: 301,
      destination: "/ko/",
    },
    "/tl": {
      status: 301,
      destination: "/tl/",
    },
    "/ms": {
      status: 301,
      destination: "/ms/",
    },
    "/tr": {
      status: 301,
      destination: "/tr/",
    },








    "/reels": {
      status: 301,
      destination: "/reels/",
    },
    "/fr/reels": {
      status: 301,
      destination: "/fr/reels/",
    },
    "/de/reels": {
      status: 301,
      destination: "/de/reels/",
    },
    "/es/reels": {
      status: 301,
      destination: "/es/reels/",
    },
    "/hi/reels": {
      status: 301,
      destination: "/hi/reels/",
    },
    "/id/reels": {
      status: 301,
      destination: "/id/reels/",
    },
    "/pt/reels": {
      status: 301,
      destination: "/pt/reels/",
    },
    "/ko/reels": {
      status: 301,
      destination: "/ko/reels/",
    },
    "/tl/reels": {
      status: 301,
      destination: "/tl/reels/",
    },
    "/ms/reels": {
      status: 301,
      destination: "/ms/reels/",
    },
    "/tr/reels": {
      status: 301,
      destination: "/tr/reels/",
    },


    "/profile": {
      status: 301,
      destination: "/profile/",
    },
    "/fr/profile": {
      status: 301,
      destination: "/fr/profile/",
    },
    "/de/profile": {
      status: 301,
      destination: "/de/profile/",
    },
    "/es/profile": {
      status: 301,
      destination: "/es/profile/",
    },
    "/hi/profile": {
      status: 301,
      destination: "/hi/profile/",
    },
    "/id/profile": {
      status: 301,
      destination: "/id/profile/",
    },
    "/pt/profile": {
      status: 301,
      destination: "/pt/profile/",
    },
    "/ko/profile": {
      status: 301,
      destination: "/ko/profile/",
    },
    "/tl/profile": {
      status: 301,
      destination: "/tl/profile/",
    },

    "/ms/profile": {
      status: 301,
      destination: "/ms/profile/",
    },
    "/tr/profile": {
      status: 301,
      destination: "/tr/profile/",
    },


    "/audio": {
      status: 301,
      destination: "/audio/",
    },
    "/fr/audio": {
      status: 301,
      destination: "/fr/audio/",
    },
    "/de/audio": {
      status: 301,
      destination: "/de/audio/",
    },
    "/es/audio": {
      status: 301,
      destination: "/es/audio/",
    },
    "/hi/audio": {
      status: 301,
      destination: "/hi/audio/",
    },
    "/id/audio": {
      status: 301,
      destination: "/id/audio/",
    },
    "/pt/audio": {
      status: 301,
      destination: "/pt/audio/",
    },
    "/ko/audio": {
      status: 301,
      destination: "/ko/audio/",
    },
    "/tl/audio": {
      status: 301,
      destination: "/tl/audio/",
    },
    "/ms/audio": {
      status: 301,
      destination: "/ms/audio/",
    },
    "/tr/audio": {
      status: 301,
      destination: "/tr/audio/",
    },




    "/photo": {
      status: 301,
      destination: "/photo/",
    },
    "/fr/photo": {
      status: 301,
      destination: "/fr/photo/",
    },
    "/de/photo": {
      status: 301,
      destination: "/de/photo/",
    },
    "/es/photo": {
      status: 301,
      destination: "/es/photo/",
    },
    "/hi/photo": {
      status: 301,
      destination: "/hi/photo/",
    },
    "/id/photo": {
      status: 301,
      destination: "/id/photo/",
    },
    "/pt/photo": {
      status: 301,
      destination: "/pt/photo/",
    },
    "/ko/photo": {
      status: 301,
      destination: "/ko/photo/",
    },
    "/tl/photo": {
      status: 301,
      destination: "/tl/photo/",
    },
    "/ms/photo": {
      status: 301,
      destination: "/ms/photo/",
    },
    "/tr/photo": {
      status: 301,
      destination: "/tr/photo/",
    },






    "/hashtag-generator": {
      status: 301,
      destination: "/hashtag-generator/",
    },
    "/fr/hashtag-generator": {
      status: 301,
      destination: "/fr/hashtag-generator/",
    },
    "/de/hashtag-generator": {
      status: 301,
      destination: "/de/hashtag-generator/",
    },
    "/es/hashtag-generator": {
      status: 301,
      destination: "/es/hashtag-generator/",
    },
    "/hi/hashtag-generator": {
      status: 301,
      destination: "/hi/hashtag-generator/",
    },
    "/id/hashtag-generator": {
      status: 301,
      destination: "/id/hashtag-generator/",
    },
    "/pt/hashtag-generator": {
      status: 301,
      destination: "/pt/hashtag-generator/",
    },
    "/ko/hashtag-generator": {
      status: 301,
      destination: "/ko/hashtag-generator/",
    },
    "/tl/hashtag-generator": {
      status: 301,
      destination: "/tl/hashtag-generator/",
    },
    "/ms/hashtag-generator": {
      status: 301,
      destination: "/ms/hashtag-generator/",
    },
    "/tr/hashtag-generator": {
      status: 301,
      destination: "/tr/hashtag-generator/",
    },





    
  },
  output: "server",
  integrations: [
    astroI18next(),
    react(),
    sitemap(),
    tailwind({
      config: {
        applyBaseStyles: false,
      },
    }),
    AutoImport({
      imports: [
        "@/shortcodes/Button",
        "@/shortcodes/Accordion",
        "@/shortcodes/Notice",
        "@/shortcodes/Video",
        "@/shortcodes/Youtube",
        "@/shortcodes/Tabs",
        "@/shortcodes/Tab",
      ],
    }),
    mdx(),
  ],
  markdown: {
    remarkPlugins: [
      remarkToc,
      [
        remarkCollapse,
        {
          test: "Table of contents",
        },
      ],
    ],
    shikiConfig: {
      theme: "one-dark-pro",
      wrap: true,
    },
    extendDefaultPlugins: true,
  },
  adapter: vercel(),
});
