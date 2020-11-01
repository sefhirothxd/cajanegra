module.exports = {
    theme: {
        opacity: {
            '09': '.09',
        },
        fontSize: {
            xs: '.75rem',
            sm: '.875rem',
            tiny: '.875rem',
            base: '1rem',
            lg: '1.125rem',
            xl: '1.25rem',
            '2xl': '1.5rem',
            '2.1xl': '1.75rem',
            '3xl': '1.875rem',
            '4xl': '2.25rem',
            '4.1xl': '2.5rem',
            '4.1.2xl': '2.625rem',
            '4.2xl': '2.75rem',
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
            '17xl': '7rem',
            '18xl': '7.125rem',
            '19xl': '7.25rem',
            '20xl': '7.5rem',
            '21xl': '7.125rem',
            '22xl': '7.25rem',
            '23xl': '7.5rem',
            '24xl': '7.875rem',
            '25xl': '8rem',
            '26xl': '8.125rem',
            '27xl': '9.25rem',
            '28xl': '9.5rem',
            '29xl': '9.875rem',
            '30xl': '10rem',
            '31xl': '10.125rem',
            '32xl': '10.25rem',
            '33xl': '10.5rem',
            '34xl': '10.875rem',
            '35xl': '11rem',
            '36xl': '11.125rem',
            '37xl': '11.25rem',
            '38xl': '11.5rem',
            '39xl': '11.875rem',
            '40xl': '12rem',
            '41xl': '12.125rem',
            '42xl': '12.25rem',
            '43xl': '12.5rem',
            '44xl': '12.875rem',
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
                300: '#222222',
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
            fondoCard: '#F8F8F8',
            fondoEquipoCard: '#404040',
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
            gridTemplateRows: {
                // Simple 8 row grid
                //   '8': 'repeat(8, minmax(0, 1fr))',

                // Complex site-specific row configuration

                524: '524px minmax(524px, 1fr)',
                661: '661px minmax(661px, 1fr)',
                915: 'minmax(915px, 1fr)',
            },

            boxShadow: {
                outline: '0 0 0 2px #f582ae',
            },
            spacing: {
                10.9: 'calc(100vw - 90%)',
                10.85: 'calc(100vw - 85%)',
                10.1: '100%',
                88.1: '882px',
                5.1: '50%',
                4.1: '40%',
                3.1: '30%',
                3.8: '38%',
                1.1: '1px',
                1.2: '2px',
                1.3: '3px',
                1.5: '5px',
                1.6: '6px',
                13: '3.25rem',
                14: '3.5rem',
                15: '3.75rem',
                17: '4.25em',
                18: '4.5rem',
                19: '4.75rem',
                21: '5.25rem',
                22: '5.5rem',
                23: '5.75rem',
                24: '6rem',
                25: '6.25rem',
                26: '6.5rem',
                27: '6.75rem',
                28: '7rem',
                29: '7.25rem',
                30: '7.5rem',
                31: '7.75rem',
                32: '8rem',
                33: '8.25rem',
                34: '8.5rem',
                35: '8.75rem',
                36: '9rem',
                37: '9.25rem',
                38: '9.5rem',
                39: '9.75rem',
                65: '16.25rem',
                66: '16.5rem',
                67: '16.75rem',
                68: '17rem',
                69: '17.25rem',
                70: '17.5rem',
                71: '17.75rem',
                72: '18rem',
                73: '18.25rem',
                74: '18.5rem',
                75: '18.75rem',
                76: '19rem',
                77: '19.25rem',
                78: '19.5rem',
                79: '19.75rem',
                80: '20rem',
                81: '20.25rem',
                82: '20.5rem',
                83: '20.75rem',
                84: '21rem',
                85: '21.25rem',
                86: '21.5rem',
                87: '21.75rem',
                88: '22rem',
                89: '22.25rem',
                90: '22.5rem',
                91: '22.75rem',
                92: '23rem',
                93: '23.25rem',
                94: '23.5rem',
                95: '23.75rem',
                96: '24rem',
                97: '24.25rem',
                98: '24.5rem',
                99: '24.75rem',
                100: '25rem',
                101: '25.25rem',
                102: '25.5rem',
                103: '25.75rem',
                104: '26rem',
                128: '32rem',
                559: '59rem',
            },
            width: {
                '1/0': '10%',
                '2/0': '20%',
                '2/1': '21%',
                '2/2': '22%',
                '2/3': '23%',
                '2/4': '24%',
                '2/5': '25%',
                '2/6': '26%',
                '2/7': '27%',
                '2/8': '28%',
                '2/9': '29%',
                '3/0': '30%',
                '4/0': '40%',
                '4/1': '41%',
                '4/2': '42%',
                '4/3': '43%',
                '4/4': '44%',
                '4/5': '45%',
                '4/6': '46%',
                '4/7': '47%',
                '4/8': '48%',
                '4/9': '49%',
                '5/0': '50%',
                '5/1': '51%',
                '5/2': '52%',
                '5/3': '53%',
                '5/4': '54%',
                '5/5': '55%',
                '5/6': '56%',
                '5/7': '57%',
                '5/8': '58%',
                '5/9': '59%',
                '6/0': '60%',
                '6/1': '61%',
                '6/2': '62%',
                '6/3': '63%',
                '6/4': '64%',
                '6/5': '65%',
                '6/6': '66%',
                '6/7': '67%',
                '6/8': '68%',
                '6/9': '69%',
                '7/0': '70%',
                '7/1': '71%',
                '7/2': '72%',
                '7/3': '73%',
                '7/4': '74%',
                '7/5': '75%',
                '7/6': '76%',
                '7/7': '77%',
                '7/8': '78%',
                '7/9': '79%',
                '8/0': '80%',
                '9/0': '90%',
                '10/0': '100%',
                87: '87%',
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