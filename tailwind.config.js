/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
  
    },
    screens: {
    
      'tablet': '640px',
      // => @media (min-width: 640px) { ... }
      'laptopsm': '820px',
      // => @media (min-width: 1024px) { ... }

      'laptop': '980px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: ['emerald', 'dark', 'light', {
      mytheme: {
        
"primary": "#F1F1F1",
        
"secondary": "#AAAAAA",
        
"accent": "#FF0000",
        
"neutral": "#222222",
        
"base-100": "#0F0F0F",
        
"info": "#2793E8",
        
"success": "#559900",
        
"warning": "#F49F1C",
        
"error": "#ff0000",
        },
      },],
    
  },}
