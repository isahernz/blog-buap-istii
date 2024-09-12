/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "azul-marino": "#00395E",
        "azul-cielo": "#00c7f5",
        "azul-marino-2": "#01395e",
        gris: "#b3b3b3",
      },
    },
  },
  plugins: [],
};
