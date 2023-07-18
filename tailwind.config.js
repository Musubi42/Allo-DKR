/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('/assets/images/hero.png')",
        transition_star_primary: "url('/assets/images/transition_star_primary.png')",
        transition_star_secondary: "url('/assets/images/transition_star_secondary.png')",
        menu_restos: "url('/assets/images/menu_restos.png')",
        menu_infos: "url('/assets/images/menu_infos.png')",
      },
      colors: {
        "primary-light": "#48734B",
        "primary-dark": "#36593C",
        "secondary": "#FFFFFF"
      },
      fontFamily: {
        gagalin: ["gagalin", "helvetica"],
        "neue-haas-grotesk-display-pro": ["Neue_haas_grotesk_display_pro", "helvetica"]
      },
    },
  },
  plugins: [],
}

