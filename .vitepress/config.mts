import { defineConfig } from "vitepress";
import year_2025 from "./config/sidebar/2025";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: "docs",

  title: "Daily Record",
  description: "Personal Daily Record",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Examples", link: "/markdown-examples" },
    ],

    sidebar: [
      {
        text: "Examples",
        items: [
          { text: "Markdown Examples", link: "/markdown-examples" },
          { text: "Runtime API Examples", link: "/api-examples" },
        ],
      },
      {
        text: "Year 2025",
        items: year_2025,
      },
    ],

    socialLinks: [{ icon: "github", link: "https://github.com/suzhou-gumi" }],
  },
});
