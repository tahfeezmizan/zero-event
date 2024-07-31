/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Roboto: "'Roboto', sans-serif",
        OpenSans: "'Open Sans', sans-serif",
      },
      backgroundImage: {
        bannerBg: "url('/slider.jpg')"
      },
      spacing: {
        '128': '32rem',
      },
    },
  },
  plugins: [],
};
