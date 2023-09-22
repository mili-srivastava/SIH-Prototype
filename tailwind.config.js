/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./props/**/*.{js,ts,jsx,tsx,mdx}",
    "./containers/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "",
        secondary: "",
      },

      // media queries
      screens: {
        xs: "20rem", // 320px
        
        sm: "40rem", // 640px

        md: "48rem", // 768px

        lg: "64rem", // 1024px

        xl: "80rem", // 1280px

        "2xl": "96rem", // 1536px
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
