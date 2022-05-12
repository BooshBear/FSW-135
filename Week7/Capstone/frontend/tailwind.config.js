module.exports = {
  mode: 'jit',
  purge: ["./src/**/*.{js,jsx,ts,tsx}", './public/index'],
  darkMode: false,
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", './public/index'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
