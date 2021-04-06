//--------------------------------------------------------------------------
// Tailwind Typography configuration
//--------------------------------------------------------------------------
//
// Here you may overwrite the default Tailwind Typography (or prosé) styles.
// Some defaults are provided.
// More info: https://github.com/tailwindlabs/tailwindcss-typography.
//

const plugin = require('tailwindcss/plugin')

module.exports = { 
  theme: {
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.neutral.800'),
            '[class~="lead"]': {
              color: theme('colors.neutral.800'),
            },
            a: {
              color: theme('colors.primary.600'),
              '&:hover': {
                color: theme('colors.primary.800'),
              },
            },
            'a.no-underline': {
              textDecoration: 'none',
            },
            'h1, h2, h3, h4': {
              color: theme('colors.neutral.900'),
            },
            blockquote: {
              borderColor: theme('colors.primary.200'),
            },
            hr: {
              borderColor: theme('colors.neutral.100'), 
            },
            'ul > li::before': { 
              backgroundColor: theme('colors.neutral.500'),
            },
            'ol > li::before': { 
              color: theme('colors.neutral.500'),
            },
            'ul > li p, ol > li p': { 
              marginTop: '0em !important',
              marginBottom: '0em !important',
            },
            pre: {
              whiteSpace: 'pre-wrap',
            },
          }
        }
      }),
    }
  },
  plugins: [
    require('@tailwindcss/typography')({
      modifiers: [],
    }),
  ]
}
