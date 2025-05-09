// tailwind.config.js
module.exports = {
    theme: {
      extend: {
        keyframes: {
          wiggle: {
            '0%, 100%': { transform: 'rotateY(-133deg)' },
            '50%': { transform: 'rotateY(13deg)' },
          },
          fadeIn: {
            '0%': { opacity: 0 },
            '100%': { opacity: 1 },
          },
           ripple: {
          '0%': { backgroundColor: 'transparent' },
          '30%': { backgroundColor: 'var(--cell-color)' },
          '60%': { backgroundColor: 'transparent' },
          '100%': { backgroundColor: 'transparent' },
        },
        },
        animation: {
          wiggle: 'wiggle 3s ease-in-out infinite',
          fadeIn: 'fadeIn 3s ease-out forwards',
           ripple: 'ripple 1.5s ease infinite',
        },
      },
    },
    plugins: [],
  }
  