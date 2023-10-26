/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('/assets/images/hero.png')",
        thiep: "url('/assets/images/thiep_poisson2.jpeg')",
        yassa: "url('/assets/images/mafe2.jpeg')",
        mafe: "url('/assets/images/yassa.jpeg')",
        transition_star_primary:
          "url('/assets/images/transition_star_primary.png')",
        transition_star_secondary:
          "url('/assets/images/transition_star_secondary.png')",
        menu_restos: "url('/assets/images/menu_restos.png')",
        menu_infos: "url('/assets/images/menu_infos.png')",
        maps_position_lille: "url('/assets/images/maps_position_lille.png')",
      },
      colors: {
        "primary-light": "#48734B",
        "primary-dark": "#36593C",
        secondary: "#D6D9C1",
      },
      fontFamily: {
        gagalin: ["gagalin", "helvetica"],
        "neue-haas-grotesk-display-pro": [
          "Neue_haas_grotesk_display_pro",
          "helvetica",
        ],
      },
    },
  },
  plugins: [],
};
