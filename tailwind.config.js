/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [
    require('daisyui'),
  ],
  theme: {},
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#ffffff",
          "secondary": "#000000",
          "accent": "#fca311",
          "neutral": "#14213d",
          "base-100": "#e5e5e5",
        },
      },
    ],
  },
};
