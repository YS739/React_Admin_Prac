/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/components/**/*.{js,jsx,mdx}",
    "./src/app/**/*.{js,jsx,mdx}",
  ],
  theme: {
    extend: {
      // colors: {
      //   themePink: "#f9004d",
      //   themeDarkRed: "#C8232C",
      //   themeLightGray: "#c6c9d8",
      //   themeDarkGray: "#1d1d24bf",
      //   themeBlack: "#1f1f25",
      //   bgBlack: "#00010c",
      //   bgGray: "#f8f9fc",
      //   borderLightGray: "#ebebeb",
      //   headerBg: "#1D1F26",
      // },
    },
  },
  plugins: [],
  // 빌드 시 사용하지 않는 클래스는 제거하는 속성
  purge: ["./src/**/*.{js,jsx}"],
};
