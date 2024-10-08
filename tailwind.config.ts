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
        fa: "#FAFAFA",
        ee: "#EEEEEE",
        ea: "#EAEAEA",
        dd: "#DDDDDD",
        aa: "#AAAAAA",
        redd: "#DF2036",
        reddhov: "#E33B4E",
      },
    },
  },
  plugins: [],
};
export default config;
