/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#DF024D",
        abu: "#F5F8FC",
        "text-abu": "#333333",
        "btn-bg": "#FBE6ED",
        footer: "#45568E",
      },
    },
  },
  plugins: [],
};
