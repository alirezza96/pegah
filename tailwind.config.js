/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
    },
    screens: {
      'sm': '576px',
      // => @media (min-width: 576px) { ... }
      'md': '960px',
      // => @media (min-width: 960px) { ... }
      'lg': '1440px',
      // => @media (min-width: 1440px) { ... }
    },
    container: {
      center: true,
      padding: {
        "DEFAULT": "0.5rem"
      }
    },
    colors: {
      "primary": "#FFF",          // white
      "secondary": "#ADD8E6",        // Light Blue
      "theme": "#FFFEF3",       // Cream
      "text": "#004080",             // Dark Blue
      "accent": "#90EE90",           // Light Green
      "border": "#D3D3D3",           // Light Gray
      "error": "#FF4C4C",            // Soft Red
      "warning": "#FFD700",          // Golden Yellow
      "success": "#32CD32",          // Lime Green
      "info": "#87CEEB"              // Sky Blue
    },
    fontFamily: {
      "primary" : ["var(--font-primary)"],
      "secondary": ["var(--font-secondary)"]
    }
  },

  plugins: [
    
  ],
};
