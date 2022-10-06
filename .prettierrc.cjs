module.exports = {
    semi: false,
    singleQuote: true,
    tabWidth: 2,
    trailingComma: 'none',
    plugins: [require('prettier-plugin-tailwindcss')],
    tailwindConfig: 'tailwind.config.cjs',
}