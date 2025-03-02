import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        lightyellow:"#fffa65",
        neonGreen:"#32ff7e",
        deepOrange:"#FF8A65"
      },
    },
  },
  plugins: [],
};
export default config;

