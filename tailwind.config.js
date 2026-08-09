/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: '#111111',
          secondary: '#171717',
          elevated: '#202020',
        },
        ink: {
          DEFAULT: '#F4F1EA',
          muted: '#A8A49C',
        },
        line: 'rgba(255,255,255,0.10)',
        accent: {
          // MOTA brand palette: red is the primary accent, lavender the
          // secondary. orange/pink/blue/lime are kept as internal keys
          // (used throughout components) but mapped onto the two-color
          // brand system so every accent in the UI resolves to red or
          // lavender, matching the identity reference.
          orange: '#FF4D3D',
          pink: '#FF6F5E',
          blue: '#B8B2FF',
          lime: '#B8B2FF',
        },
        brand: {
          red: '#FF4D3D',
          lavender: '#B8B2FF',
          cream: '#F4F1EA',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        body: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        content: '1440px',
      },
      backgroundImage: {
        'mota-gradient': 'linear-gradient(90deg, #FF4D3D 0%, #FF6F5E 50%, #B8B2FF 100%)',
      },
      transitionTimingFunction: {
        mota: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      keyframes: {
        grain: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '10%': { transform: 'translate(-1%, -2%)' },
          '20%': { transform: 'translate(-3%, 1%)' },
          '30%': { transform: 'translate(2%, -3%)' },
          '40%': { transform: 'translate(-2%, 3%)' },
          '50%': { transform: 'translate(-3%, 1%)' },
          '60%': { transform: 'translate(3%, 0%)' },
          '70%': { transform: 'translate(0%, 2%)' },
          '80%': { transform: 'translate(1%, -1%)' },
          '90%': { transform: 'translate(-1%, 2%)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        grain: 'grain 8s steps(10) infinite',
        marquee: 'marquee 40s linear infinite',
      },
    },
  },
  plugins: [],
}
