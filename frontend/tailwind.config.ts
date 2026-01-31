import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}", // agar pages folder use ho raha ho
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;

