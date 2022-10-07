/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        kenaiYellow: '#FFA634',
        kenaiGradient1: '#FFA634',
        kenaiGradient2: '#FF267A',
        // neutral
        kenaiWhite: '#F9F9F9',
        kenaiGray: '#A8A8A8',
        kenaiGrayDark: '#181818',
        kenaiDark: '#121214'
      },
      backgroundImage: {
        cover: "url('/cover.avif')",
        img1: "url('/alice.avif')",
        img2: "url('/angrybirds.avif')",
        img3: "url('/antman.avif')",
        img4: "url('/batman.avif')",
        img5: "url('/mogli.avif')"
      }
    }
  },
  plugins: []
}
