/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0D99FF",
        white: "#FFFFFF",
        black: "#343030",
      },
      backgroundImage: {
        "multicolor-gradient":
          "linear-gradient(83.61deg, #1495D5 -1.57%, #F36185 34.98%, #94BC45 71.53%)",
        "pastel-gradient":
          "linear-gradient(270deg, rgba(166, 207, 245, 0.17) 0%, rgba(184, 167, 238, 0.17) 50%, rgba(215, 209, 233, 0.17) 100%)",
        "midnight-gradient":
          "linear-gradient(270deg, rgba(209, 181, 255, 0.64) 15%, rgba(133, 171, 247, 0.557273) 54%, rgba(81, 164, 242, 0.5) 81%)",
        "charcol-gradient":
          "linear-gradient(180deg, rgba(228, 218, 243, 0.64) 0%, rgba(134, 124, 151, 0.3712) 100%)",
      },
    },
  },
  plugins: [],
};
