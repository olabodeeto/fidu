import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        fidu_primary: "#5816E0",
        fidu_secondary: "#E08816",
        fidu_lightPurple: "#DED0F9",
        fidu_textColor: "#0B0812",
        fidu_headingColor: "#12042D",
        fidu_black: "#0B0812",
      },
    },
  },
  plugins: [],
};
export default config;
