module.exports = {
  content: [
      "./src/**/*.{html,js,jsx,ts,tsx}",
       "./node_modules/@ionic/react/**/*.js",
    "./node_modules/daisyui/dist/**/*.js"
  ],
  theme: {
      extend: {
          colors: { 
              morado: '#961efe',
              moradoele: '#4f129d'
          }
      },
  },
  plugins: [
    require('daisyui'),
  ],
};
