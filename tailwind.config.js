module.exports = {
  content: ["index.html", "./src/pages/contact.html"],
  theme: {
    fontFamily : {
      'sans': ['Segoe UI', 'Helvetica', 'sans-serif'],
      'body': ['Poppins']

    },
    extend: {
      keyframes: {
        slider: {
          '0%': {
            opacity: '0',      
            transform: 'translateX(-500px)'
          },
          '100%': {
            opacity: '1',          
            transform: 'translateX(0.9)'
          },
        }
      },
      animation: {
        slider: 'slider 0.5s ease-in'
      }
    },
    },
  plugins: [],
}
