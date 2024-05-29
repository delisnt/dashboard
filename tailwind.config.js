/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,css}"],
  theme: {
    extend: {
      colors: {
        "dark-green": "#05372C",
        "sidebar-list": "#B6DBD4",
        "sidebar-btn": "#0F4A3D",
        "bg-primary": "#02A18A",
        "btn-color": "#F1F1F1",
        "unpaid-color": "#EF8484",
        "paid-color": "#029C86",
        "part-paid-color": "#6FD35F"
      }
    },
  },
  plugins: [],
}
