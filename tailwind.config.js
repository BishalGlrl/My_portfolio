/** @type {import('tailwindcss').Config} */
module.exports = {
  
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-dark-blue': '#162052',
        'custom-sky-blue': '#00ccff',
        'custom-orange' : '#f57804',
        'bg_color' : '#f4f4f9',
        // 'text_color' : '#f57804',
        'button_color' : '#007acc',
        'button_Text' : '#ffffff',
        navy: '#001f3f',
        coral: '#ff7f50',
        'coral-dark': '#e67342',
      },
    },
  },
  plugins: [],
}

