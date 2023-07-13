/** @type {import("tailwindcss").Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#ffffff",
        "primary-hover":"#f3f4f6",
        "primary-inverted": "#1A1A1C",
        "primary-inverted-hover": "#3D3D41",
        "neutral": "#6b7280",
        "neutral-lighter":"#DADCE0",
        "ultra-light": "#f3f4f6",
        "btn-fill": "#ba181b",
        "btn-fill-hover": "#a4161a",
        "key-color": "#2d88f0",
        "key-color-hover":"#549FF3"
        
      }
    },
  },
  plugins: [],
}

