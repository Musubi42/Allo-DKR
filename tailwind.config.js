/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"],
  theme: {
    extend: {
      colors: {
        "primary": "#36593C",
        "secondary": "#D6D9C1"
      },
      fontFamily: {
        gagalin: ["gagalin", "helvetica"],
        "neue-haas-grotesk-display-pro": ["Neue_haas_grotesk_display_pro", "helvetica"]
      },
    },
  },
  plugins: [],
}

