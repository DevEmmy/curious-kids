/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/Components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/AtomicComponents/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      spacing: {
        xPadding: "5%",
      },
      gridTemplateColumns: {
        "3to1": "3fr 1fr",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary1: "#F5AE1E",
        primary2: "#00AC76",
        primary3: "#8D67CE",
        primary4: "#FE5972",
        primary5: "#D8D8D8",
        purplePrime: "#6941C6",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      screens: {
        lt: { max: "500px" },
        sm: { max: "600px" },
        sm1: { max: "768px" },
        md: { min: "800px" },
        md1: { max: "850px" },
        lg: { min: "2300px" },
        xl: { max: "1280px" },
        "2xl": { max: "1536px" },
      },
    },
  },
  plugins: [],
};
