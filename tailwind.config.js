/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  "prefix": "tw-",
  theme: {
    extend: {
      colors:{
        "primary": {
          "100": '#F2F6FE',
          "200": '#B8CCF8',
          "300": '#81A4F3',
          "400": '#5F8CF0',
          "500": '#3971EC',
          "600": '#254897',
          "700": '#142955',
          "800": '#050A15',
          "900": '#010102'
        }
      }
    },
  },
  plugins: [],
}

