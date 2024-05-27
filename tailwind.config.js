/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "480px",
        sd: "628px",
        md: "768px",
        dl: "975px",
        lg: "1024px",
        xg: "1364px",
        xl: "1440px"  
      },
    },
  },
  plugins: [],
}

