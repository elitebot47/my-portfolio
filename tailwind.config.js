import tailwindScrollbar from "tailwind-scrollbar";
import defaultTheme from "tailwindcss/defaultTheme";

const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-montserrat)", ...defaultTheme.fontFamily.sans],
        secondary: ["var(--font-roboto)", ...defaultTheme.fontFamily.sans],
        montserrat: ["var(--font-montserrat)", ...defaultTheme.fontFamily.sans],
        roboto: ["var(--font-roboto)", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [tailwindScrollbar],
};

export default config;
