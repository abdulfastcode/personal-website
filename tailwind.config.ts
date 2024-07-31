import type { Config } from "tailwindcss";
const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",

          "max_inst":"url(/education/max_inst.jpg)",
          "rvce":"url(/education/rvce.png)",
          "saarland":"url(/education/saarland.jpeg)",
          "research":"url(/profession/research.jpeg)",
          "sde":"url(/profession/sde1.jpg)",
          "apple":"url(/profession/apple1.webp)",
          "desc":"url(/profession/desc.webp)",
          "fcai":"url(/profession/fcai.jpg)",
          "adv_tint":"url(/profession/adv_tint1.jpg)",
          "yahoo":"url(/profession/yahoo1.png)",
          "uavio":"url(/profession/uavio.png)",
          "iitb":"url(/profession/iitb.jpg)",
          "perception_codes":"url(/profession/perception_codes.jpg)",
          "iisc":"url(/profession/iisc1.webp)",
      },
      fontFamily: {
        aeonik: ["var(--font-aeonik)"],
        bwmss01: ["var(--font-bwmss01)"],
      },
    },
  },
  plugins: [
    addVariablesForColors,
  ],
};
// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
 
  addBase({
    ":root": newVars,
  });
}
export default config;
