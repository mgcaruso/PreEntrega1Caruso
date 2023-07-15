/** @type {import("tailwindcss").Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "var(--primary)",
        "primary-hover": "var(--primary-hover)",
        "primary-inverted": "var(--primary-inverted)",
        "primary-inverted-hover": "var(--primary-inverted-hover)",
        "neutral": "var(--neutral)",
        "neutral-lighter": "var(--neutral-lighter)",
        "ultra-light": "var(--ultra-light)",
        "btn-fill": "var(--btn-fill)",
        "btn-fill-hover": "var(--btn-fill-hover)",
        "key-color": "var(--key-color)",
        "key-color-hover": "var(--key-color-hover)"
      }
    },
    fontFamily: {
      body: ["var(--body)"],
      heading: ["var(--branding)"]
    }
  },
  plugins: [],
}

