module.exports = {
    theme: {
        colors: {
            primaryy: {
                100: '#EB5801',
                200: '#ffeadd',
                300: '#E45E00',
                400: '#B04403',
                500: '#796767',
                600: '#FACAAD',
            },
            greyy: {
                100: '#e9e8e8',
                200: '#8282828',
                300: '#4d4d4d',
                400: '#666666',
                500: '#606060',
                600: '#828282',
                700: '#545454',
                800: '#848282',
                900: '#6B6B6B',
                1000: '#022222',
            },
            light: {
                100: '#E5E5E5',
                200: '#888888',
            },
            dark: {
                100: '#333333',
                200: '#111111',
            },
            sand: '#ECABA9',
            red: 'red',
            'sand-light': '#F7E7E7', // elements background
            pink: '#f0533e', // elements button
            navy: '#31272a', // elements button text
            'navy-light': '#594a4e', // elements paragraph
            teal: '#F0533E', // illustration secondary
            default: '#31272a',
            white: '#fffffe', // white,
            primary: '#eb5801',
            primaryLow: '#FF8E3C',
            secondary: '#312729',
            complementary: '#ffc0bf',
            active: '#ebacaa',
            black: '#000',
            bgglobal: '#f8e7e7',
            transparent: 'transparent',
            grey: '#D4D4D4',
            grey1: 'ADADAD',
            primaryBG: '#FFF5EF',
            verde: '#00AD5A', //mensaje al dejar un comentario
            fondoPageMain: '#E5E5E5',
        },
        fontFamily: {
            inter: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
            'inter-var': 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
            modernist: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',

            Rock: 'Rock Salt , cursive',

            Roboto: 'Roboto, sans-serif',

            bad: 'Bad Script, cursive',
        },
        extend: {
            boxShadow: {
                outline: '0 0 0 2px #f582ae',
            },
            spacing: {
                80: '20rem',
                96: '24rem',
                128: '32rem',
            },
        },
        customForms: (theme) => ({
            default: {
                'checkbox, input, multiselect, radio, select, textarea': {
                    backgroundColor: theme('color.sand-light'),
                    borderRadius: theme('borderRadius.none'),
                    borderWidth: theme('borderWidth.2'),
                    '&:focus': {
                        boxShadow: theme('boxShadow.outline'),
                    },
                },
                'checkbox, radio': {
                    '&:checked': {
                        backgroundColor: theme('colors.navy'),
                    },
                },
                'input, multiselect, select, textarea': {
                    width: theme('width.full'),
                },
            },
        }),
        screens: {
            xl: { max: '1320px' },
            // => @media (max-width: 1279px) { ... }

            lg: { max: '1060px' },
            // => @media (max-width: 1023px) { ... }

            md: { max: '880px' },
            // => @media (max-width: 767px) { ... }

            sm: { max: '680px' },

            xs: { max: '480px' },
            // => @media (max-width: 639px) { ... }
        },
    },
    variants: {
        margin: ['responsive', 'last'],
        textColor: ['responsive', 'hover', 'focus', 'group-hover'],
    },
    // plugins: [require('@tailwindcss/custom-forms'), require('@tailwindcss/ui')],
};