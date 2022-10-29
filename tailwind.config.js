/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./public/*.html"],
    theme: {
        colors: {
            'pink': '#ffafcc',
            'white': '#ffffff',
            'darkRed': '#d62828',
            'green': {
                'low': '#a3b18a',
                'medium': '#588157',
                'dark': '#344e41',
            },
            'yellow': {
                'low': '#e9ff70',
                'medium': '#ffd60a',
                'dark': '#ffc300',
            },
            'blue': {
                'low': '#bde0fe',
                'medium': '#0077b6',
                'dark': '#03045e',
            },
            'purple': {
                'low': '#9f86c0',
                'medium': '#5e548e',
                'dark': '#231942'
            }
        },
        extend: {
            fontFamily: {
                roboto: ['Roboto', 'Sans-serif']
            }
        },
    },
    plugins: [
        require('tailwindcss'),
        require('autoprefixer')
    ],
}