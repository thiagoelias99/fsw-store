/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        border: 'hsl(240 3.7% 15.9%)',
        input: 'hsl(240 3.7% 15.9%)',
        ring: 'hsl(346.8 77.2% 49.8%)',
        background: 'hsl(20 14.3% 4.1%)',
        foreground: 'hsl(0 0% 95%)',
        primary: {
          DEFAULT: 'hsl(346.8 77.2% 49.8%)',
          foreground: 'hsl(355.7 100% 97.3%)'
        },
        secondary: {
          DEFAULT: 'hsl(240 3.7% 15.9%)',
          foreground: 'hsl(0 0% 98%)'
        },
        destructive: {
          DEFAULT: 'hsl(0 62.8% 30.6%)',
          foreground: 'hsl(0 85.7% 97.3%)'
        },
        muted: {
          DEFAULT: 'hsl(0 0% 15%)',
          foreground: 'hsl(240 5% 64.9%)'
        },
        accent: {
          DEFAULT: 'hsl(12 6.5% 15.1%)',
          foreground: 'hsl(0 0% 98%)'
        },
        popover: {
          DEFAULT: 'hsl(0 0% 9%)',
          foreground: 'hsl(0 0% 95%)'
        },
        card: {
          DEFAULT: 'hsl(24 9.8% 10%)',
          foreground: 'hsl(0 0% 95%)'
        }
      }
    },
  }
  ,
  plugins: [],
}