export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        dark: {
          bg: "#0A0A10",
          card: "#12121A",
          border: "#1E1E28",
        },
        light: {
          bg: "#F8F9FA",
          card: "#FFFFFF",
          border: "#E9ECEF",
        },
        'primary-orange': "#F97316",
        'primary-yellow': "#F59E0B",
      },
      backgroundImage: {
        'gradient-dark': 'linear-gradient(to right, #F97316, #F59E0B)',
        'gradient-light': 'linear-gradient(to right, #FB923C, #FCD34D)',
      },
      boxShadow: {
        'glow-orange': '0 0 20px rgba(249, 115, 22, 0.3)',
        'glow-yellow': '0 0 20px rgba(245, 158, 11, 0.3)',
        'glow-orange-lg': '0 0 30px rgba(249, 115, 22, 0.5)',
      },
      animation: {
        'blob': 'blob 7s infinite',
        'spin-slow': 'spin 8s linear infinite',
      },
      keyframes: {
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        }
      }
    },
  },
  plugins: [],
}
