/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        roseDeep: "#8B2F4A",
        roseSoft: "#C76D85",
        plumDark: "#3B1430",
        plumSoft: "#5A2D4E",
        goldRoyal: "#D4AF37",
        goldSoft: "#F4E3B2",
        creamLight: "#FFF8F0",
        midnight: "#0B0A13",
      },
      fontFamily: {
        serif: ["'Cormorant Garamond'", "serif"],
        sans: ["'Poppins'", "sans-serif"],
      },
      backgroundImage: {
        "enchanted-gradient": "linear-gradient(135deg, rgba(139,47,74,0.85), rgba(59,20,48,0.85))",
        "gold-shimmer": "linear-gradient(90deg, rgba(212,175,55,0.1), rgba(244,227,178,0.4), rgba(212,175,55,0.1))",
      },
      boxShadow: {
        glowSoft: "0 0 25px rgba(212, 175, 55, 0.35)",
        glowRose: "0 0 20px rgba(199, 109, 133, 0.35)",
        glowPlum: "0 0 25px rgba(90, 45, 78, 0.45)",
      },
      backdropBlur: {
        xs: "2px",
      },
      keyframes: {
        petalFall: {
          "0%": { transform: "translate3d(0, -20vh, 0) rotate(0deg)", opacity: "1" },
          "15%": { opacity: "0.9" },
          "80%": { opacity: "0.8" },
          "100%": { transform: "translate3d(0, 120vh, 0) rotate(360deg)", opacity: "0.5" },
        },
        shimmer: {
          "0%": {transform: 'translateX(-100%)'},
          "100%": {transform: 'translateX(100%)'},
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)"},
        },
        fadeGlow: {
          "0%": { opacity: 0.3 },
          "50%": { opacity: 1 },
          "100%": { opacity: 0.3},
        },
      },
      animation: {
        petalFall: "petalFall 7s linear infinite",
        shimmer: "shimmer 2s linear infinite",
        float: "float 4s ease-in-out infinite",
        fadeGlow: "fadeGlow 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
