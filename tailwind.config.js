import daisyui from "daisyui"
/** @type {import('tailwindcss').Config} */
export default {
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        utama:"#0da8e0",
        kedua:"#e6a800"
      }
    },
    fontFamily:{
      Poppins:["Poppins",]
    }
  },
  plugins: [daisyui],
}

