module.exports = {
    theme: {
        fontSize: {
            xs: '.75rem',
            sm: '.875rem',
            tiny: '.875rem',
            base: '1rem',
            lg: '1.125rem',
            xl: '1.25rem',
            '2xl': '1.5rem',
            '3xl': '1.875rem',
            '4xl': '2.25rem',
            '5xl': '3rem',
            '6xl': '4rem',
            '7xl': '5rem',
            '8xl': '5.125rem',
            '9xl': '5.25rem',
            '10xl': '5.5rem',
            '11xl': '5.875rem',
            '12xl': '6rem',
            '13xl': '6.125rem',
            '14xl': '6.25rem',
            '15xl': '6.5rem',
            '16xl': '6.875rem',
        },
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
            barra: {
                100: '#ed1c0d',
                200: '#ed7300',
                300: '#ffbf0f',
                400: '#87c70f',
                500: '#00c9bf',
                600: '#3d8cde',
                700: '#663382',
                800: '#ffa3b5',
                900: '#ff3363',
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
            modalFondo: '#231F20',
            botonModal: '#ff3363',
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
                1.1: '1px',
                1.2: '2px',
                1.3: '3px',
                1.5: '5px',
                1.6: '6px',
                13: '3.25rem',
                14: '3.5rem',
                15: '3.75rem',
                28: '7rem',
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
    height: {
        12: '12px',
    },
    // plugins: [require('@tailwindcss/custom-forms'), require('@tailwindcss/ui')],
};