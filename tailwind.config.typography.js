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
              color: theme("colors.grey.1000"),
              backgroundColor: theme("colors.gray.100"),
            },
            "pre code::before": {
              "padding-left": "unset"
            },
            "pre code::after": {
              "padding-right": "unset"
            },
            code: {
              backgroundColor: theme("colors.grey.100"),
              color: "#DD1144",
              fontWeight: "400",
              "border-radius": "0.25rem"
            },
            "code::before": {
              content: '""',
              "padding-left": "0.25rem"
            },
            "code::after": {
              content: '""',
              "padding-right": "0.25rem"
            }
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
