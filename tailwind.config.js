/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        nunito: ["nunito", "sans-serif"],
      },
      colors: {
        gray: {
          100: "#F9F9F9",
          200: "#E3E3E3",
          300: "#858585",
          400: "#6C6F70",
          500: "#192428",
        },
        white: "#ffffff",
        primary: {
          100: "#EFDEF7",
          300: "#CCABDA",
          500: "#9079F3",
        },
        secondary: {
          100: "#FCD9D5",
          300: "#F9A59A",
          500: "#FA897B",
        },
        // blue: {
        //   100: "#B1E7FF",
        //   300: "#84D8FF",
        //   500: "#3CC1FE",
        // },
        // tertiary: {
        //   100: "#FDDFAE",
        //   300: "#FECA76",
        //   500: "#FFB742",
        // },
        // green: {
        //   100: "#A1F2B8",
        //   300: "#61D782",
        //   500: "#40B661",
        // },
        // red: "#EB5757",
        // orange: "#F4811A",
        // yellow: "#FFB742",
      },
    },
    fontSize: {
      xs: ["14px"],
      sm: ["16px"],
      lg: ["18px"],
      xl: ["24px"],
      "2xl": ["32px"],
      "3xl": ["48px"],
      "4xl": ["64px"],
    },
    // fontFamily: {
    //   Rokh: ["RokhBold"],
    //   Dana: ["DanaRegular"],
    //   DanaBold: ["DanaBold"],
    //   DanaSemiBold: ["DanaSemiBold"],
    // },
  },
  plugins: [],
};
