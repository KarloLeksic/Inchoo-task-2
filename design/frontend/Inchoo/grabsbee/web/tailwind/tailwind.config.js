const {
  spacing
} = require('tailwindcss/defaultTheme');

const hyvaModules = require('@hyva-themes/hyva-modules');

module.exports = hyvaModules.mergeTailwindConfig({
  theme: {
    extend: {
        colors: {
            primary: {
                "DEFAULT": "#12167A",

            },
            secondary: {
                "DEFAULT": "#EC1D2E",
                "90": "#D00505",
            },
            tertiary: {
                "90": "#696969",
                "60": "#828282",
                "25": "#9C9C9C",
                "10": "#CFCFCF",
                "5": "#E8E8E8",
            },
            "success": "#32D08D",
            "error": "#F14F39",
            "warning": "#F1B239",
            text: {
                "DEFAULT": "#4E4E4E",
                "muted": "#CFCFCF",
            },
            link: {
                "DEFAULT": "#EC1D2E",
                "visited": "#B9121D",
                "hover": "#D41727",
                "active": "#740D15",
            },
            form: {
                "border-err": "#EC1D2E",
                "border-focus": "#4E4E4E",
                "label": "#1A1A1A",
            }
        },
        fontFamily: {
            "body": ['"Open Sans"', 'sans-serif'],
            "heading": ['"Anton"', 'sans-serif'],
        },
        fontSize: {
            'h1-mobile': [
                '1.5rem',
                {
                    lineHeight: '2.625rem',
                    letterSpacing: 'normal',
                    fontWeight: '400'
                }
            ],
            'h2-mobile': [
                '1.25rem',
                {
                    lineHeight: '2.625rem',
                    letterSpacing: 'normal',
                    fontWeight: '400'
                }
            ],
            'h3-mobile': [
                '1rem',
                {
                    lineHeight: '1.25rem',
                    letterSpacing: 'normal',
                    fontWeight: '400'
                }
            ],
            'h4-mobile': [
                '0.9375rem',
                {
                    lineHeight: '1.25rem',
                    letterSpacing: 'normal',
                    fontWeight: '400'
                }
            ],
            'h5-mobile': [
                '0.875rem',
                {
                    lineHeight: '1.25rem',
                    letterSpacing: 'normal',
                    fontWeight: '400'
                }
            ],
            'h6-mobile': [
                '0.8125rem',
                {
                    lineHeight: '1.25rem',
                    letterSpacing: 'normal',
                    fontWeight: '400'
                }
            ],
            'h1-desktop': [
                '1.75rem',
                {
                    lineHeight: '3rem',
                    letterSpacing: 'normal',
                    fontWeight: '400'
                }
            ],
            'h2-desktop': [
                '1.5625rem',
                {
                    lineHeight: '3rem',
                    letterSpacing: 'normal',
                    fontWeight: '400'
                }
            ],
            'h3-desktop': [
                '1.375rem',
                {
                    lineHeight: '1.875rem',
                    letterSpacing: 'normal',
                    fontWeight: '400'
                }
            ],
            'h4-desktop': [
                '1.25rem',
                {
                    lineHeight: '1.5rem',
                    letterSpacing: 'normal',
                    fontWeight: '400'
                }
            ],
            'h5-desktop': [
                '1.0625rem',
                {
                    lineHeight: '1.5rem',
                    letterSpacing: 'normal',
                    fontWeight: '400'
                }
            ],
            'h6-desktop': [
                '1rem',
                {
                    lineHeight: '1.5rem',
                    letterSpacing: 'normal',
                    fontWeight: '400'
                }
            ],
            'xxs': '0.625rem',
        }
    }
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography'), require('@tailwindcss/line-clamp')],
  // Examples for excluding patterns from purge
  content: [
    // this theme's phtml and layout XML files
    '../../**/*.phtml',
    '../../*/layout/*.xml',
    '../../*/page_layout/override/base/*.xml',
    // parent theme in Vendor (if this is a child-theme)
    //'../../../../../../../vendor/hyva-themes/magento2-default-theme/**/*.phtml',
    //'../../../../../../../vendor/hyva-themes/magento2-default-theme/*/layout/*.xml',
    //'../../../../../../../vendor/hyva-themes/magento2-default-theme/*/page_layout/override/base/*.xml',
    // app/code phtml files (if need tailwind classes from app/code modules)
    '../../../../../../../app/code/**/*.phtml',
  ]
});
