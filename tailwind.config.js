let defaultConfig = require('tailwindcss/defaultConfig')

module.exports = {
  theme: {
    /*
    |-----------------------------------------------------------------------------
    | Colors                                  https://tailwindcss.com/docs/colors
    |-----------------------------------------------------------------------------
    | .error { color: theme('colors.red') }
    */

    colors: {
      transparent: 'transparent',

      black: '#22292f',
      'grey-darkest': '#3d4852',
      'grey-darker': '#606f7b',
      'grey-dark': '#8795a1',
      grey: '#b8c2cc',
      'grey-light': '#dae1e7',
      'grey-lighter': '#f1f5f8',
      'grey-lightest': '#f8fafc',
      white: '#ffffff',

      'red-darkest': '#3b0d0c',
      'red-darker': '#621b18',
      'red-dark': '#cc1f1a',
      red: '#e3342f',
      'red-light': '#ef5753',
      'red-lighter': '#f9acaa',
      'red-lightest': '#fcebea',

      'orange-darkest': '#462a16',
      'orange-darker': '#613b1f',
      'orange-dark': '#de751f',
      orange: '#f6993f',
      'orange-light': '#faad63',
      'orange-lighter': '#fcd9b6',
      'orange-lightest': '#fff5eb',

      'yellow-darkest': '#453411',
      'yellow-darker': '#684f1d',
      'yellow-dark': '#f2d024',
      yellow: '#ffed4a',
      'yellow-light': '#fff382',
      'yellow-lighter': '#fff9c2',
      'yellow-lightest': '#fcfbeb',

      'green-darkest': '#0f2f21',
      'green-darker': '#1a4731',
      'green-dark': '#1f9d55',
      green: '#38c172',
      'green-light': '#51d88a',
      'green-lighter': '#a2f5bf',
      'green-lightest': '#e3fcec',

      'teal-darkest': '#0d3331',
      'teal-darker': '#20504f',
      'teal-dark': '#38a89d',
      teal: '#4dc0b5',
      'teal-light': '#64d5ca',
      'teal-lighter': '#a0f0ed',
      'teal-lightest': '#e8fffe',

      'blue-darkest': '#12283a',
      'blue-darker': '#1c3d5a',
      'blue-dark': '#2779bd',
      blue: '#3490dc',
      'blue-light': '#6cb2eb',
      'blue-lighter': '#bcdefa',
      'blue-lightest': '#eff8ff',

      'indigo-darkest': '#191e38',
      'indigo-darker': '#2f365f',
      'indigo-dark': '#5661b3',
      indigo: '#6574cd',
      'indigo-light': '#7886d7',
      'indigo-lighter': '#b2b7ff',
      'indigo-lightest': '#e6e8ff',

      'purple-darkest': '#21183c',
      'purple-darker': '#382b5f',
      'purple-dark': '#794acf',
      purple: '#9561e2',
      'purple-light': '#a779e9',
      'purple-lighter': '#d6bbfc',
      'purple-lightest': '#f3ebff',

      'pink-darkest': '#451225',
      'pink-darker': '#6f213f',
      'pink-dark': '#eb5286',
      pink: '#f66d9b',
      'pink-light': '#fa7ea8',
      'pink-lighter': '#ffbbca',
      'pink-lightest': '#ffebef',
    },

    /*
    |-----------------------------------------------------------------------------
    | Screens                      https://tailwindcss.com/docs/responsive-design
    |-----------------------------------------------------------------------------
    | Class name: .{screen}:{utility}
    */

    screens: {
      'xs': '400px',
      'sm': '576px',
      'md': '768px',
      'lg': '992px',
      'xl': '1200px',
    },

    /*
    |-----------------------------------------------------------------------------
    | fontFamily                                   https://tailwindcss.com/docs/font-family/
    |-----------------------------------------------------------------------------
    | Class name: .font-{name}
    */

    fontFamily: {
      'lato': [
        'Lato',
        'sans-serif',
      ],
      'nunito': [
        'Nunito',
        'sans-serif'
      ],
      'sans': [
        '-apple-system',
        'BlinkMacSystemFont',
        'Segoe UI',
        'Roboto',
        'Oxygen',
        'Ubuntu',
        'Cantarell',
        'Fira Sans',
        'Droid Sans',
        'Helvetica Neue',
        'sans-serif',
      ],
      'serif': [
        'Constantia',
        'Lucida Bright',
        'Lucidabright',
        'Lucida Serif',
        'Lucida',
        'DejaVu Serif',
        'Bitstream Vera Serif',
        'Liberation Serif',
        'Georgia',
        'serif',
      ],
      'mono': [
        'Menlo',
        'Monaco',
        'Consolas',
        'Liberation Mono',
        'Courier New',
        'monospace',
      ]
    },

    /*
    |-----------------------------------------------------------------------------
    | Font sizes                         https://tailwindcss.com/docs/font-size/
    |-----------------------------------------------------------------------------
    | Control the font size of an element using the .text-{size} utilities.
    */

    fontSize: {
      '2xs': '.6875rem',  // 11px
      'xs': '.75rem',     // 12px
      'sm': '.875rem',    // 14px
      'md': '.9375rem',   // 15px
      'base': '1rem',     // 16px
      'lg': '1.125rem',   // 18px
      'xl': '1.25rem',    // 20px
      '2xl': '1.5rem',    // 24px
      '3xl': '1.875rem',  // 30px
      '4xl': '2.25rem',   // 36px
      '5xl': '3rem',      // 48px
      '6xl': '4rem',      // 56px
    },

    /*
    |-----------------------------------------------------------------------------
    | Font weights                       https://tailwindcss.com/docs/font-weight
    |-----------------------------------------------------------------------------
    | Class name: .font-{weight}
    */

    fontWeights: {
      'hairline': 100,
      'thin': 200,
      'light': 300,
      'normal': 400,
      'medium': 500,
      'semibold': 600,
      'bold': 700,
      'extrabold': 800,
      'black': 900,
    },

    /*
    |-----------------------------------------------------------------------------
    | lineHeight (line height)              https://tailwindcss.com/docs/line-height
    |-----------------------------------------------------------------------------
    | Class name: .leading-{size}
    */

    lineHeight: {
      'none': 1,
      'tight': 1.25,
      'normal': 1.5,
      'loose': 2,
    },

    /*
    |-----------------------------------------------------------------------------
    | Letter spacing (letter spacing)       https://tailwindcss.com/docs/letter-spacing
    |-----------------------------------------------------------------------------
    | Class name: .tracking-{size}
    */

    letterSpacing: {
      'tight': '-0.05em',
      'normal': '0',
      'wide': '0.05em',
    },

    /*
    |-----------------------------------------------------------------------------
    | Text colors                         https://tailwindcss.com/docs/text-color
    |-----------------------------------------------------------------------------
    | Class name: .text-{color}
    */

    textColor: theme => theme('colors'),

    /*
    |-----------------------------------------------------------------------------
    | Background color             https://tailwindcss.com/docs/background-color
    |-----------------------------------------------------------------------------
    | Class name: .bg-{color}
    */

    backgroundColor: theme => theme('colors'),

    /*
    |-----------------------------------------------------------------------------
    | Border width                     https://tailwindcss.com/docs/border-width
    |-----------------------------------------------------------------------------
    | Class name: .border{-side?}{-width?}
    */

    borderWidth: {
      default: '1px',
      '0': '0',
      '2': '2px',
      '4': '4px',
      '8': '8px',
    },

    /*
    |-----------------------------------------------------------------------------
    | Border color                     https://tailwindcss.com/docs/border-color
    |-----------------------------------------------------------------------------
    | Class name: .border-{color}
    */

    borderColor: theme => ({
      ...theme('colors'),
      default: theme('colors.grey-light'),
    }),

    /*
    |-----------------------------------------------------------------------------
    | Border radius                    https://tailwindcss.com/docs/border-radius
    |-----------------------------------------------------------------------------
    | Class name: .rounded{-side?}{-size?}
    */

    borderRadius: {
      'none': '0',
      'sm': '.125rem',
      default: '.25rem',
      'lg': '.5rem',
      'xl': '99px',
      'full': '9999px',
    },

    /*
    |-----------------------------------------------------------------------------
    | Width                                    https://tailwindcss.com/docs/width
    |-----------------------------------------------------------------------------
    | Class name: .w-{size}
    */

    width: {
      'auto': 'auto',
      'px': '1px',
      '1': '0.25rem',
      '2': '0.5rem',
      '3': '0.75rem',
      '4': '1rem',
      '5': '1.25rem',
      '6': '1.5rem',
      '8': '2rem',
      '10': '2.5rem',
      '12': '3rem',
      '16': '4rem',
      '20': '5rem',
      '24': '6rem',
      '28': '7rem',
      '32': '8rem',
      '40': '10rem',
      '48': '12rem',
      '56': '14rem',
      '64': '16rem',
      '90': '20rem',
      '1/2': '50%',
      '1/3': '33.33333%',
      '2/3': '66.66667%',
      '1/4': '25%',
      '3/4': '75%',
      '1/5': '20%',
      '2/5': '40%',
      '3/5': '60%',
      '4/5': '80%',
      '1/6': '16.66667%',
      '2/6': '33.33333%',
      '5/6': '83.33333%',
      'full': '100%',
      'double': '200%',
      'screen': '100vw'
    },

    /*
    |-----------------------------------------------------------------------------
    | Height                                  https://tailwindcss.com/docs/height
    |-----------------------------------------------------------------------------
    | Class name: .h-{size}
    */
    height: {
      'auto': 'auto',
      'px': '1px',
      '1': '0.25rem',
      '2': '0.5rem',
      '3': '0.75rem',
      '4': '1rem',
      '5': '1.25rem',
      '6': '1.5rem',
      '8': '2rem',
      '10': '2.5rem',
      '12': '3rem',
      '13': '3.125rem',
      '16': '4rem',
      '20': '5rem',
      '24': '6rem',
      '28': '6rem',
      '32': '8rem',
      '40': '10rem',
      '48': '12rem',
      '64': '16rem',
      '75': '18.75rem',
      '80': '20rem',
      '100': '25rem',
      '120': '30rem',
      'full': '100%',
      '1/2': '50%',
      '1/3': '33%',
      'screen': '100vh'
    },

    /*
    |-----------------------------------------------------------------------------
    | Minimum width                        https://tailwindcss.com/docs/min-width
    |-----------------------------------------------------------------------------
    | Class name: .min-w-{size}
    */

    minWidth: {
      '0': '0',
      '16': '4rem',
      'full': '100%',
    },

    /*
    |-----------------------------------------------------------------------------
    | Minimum height                      https://tailwindcss.com/docs/min-height
    |-----------------------------------------------------------------------------
    | Class name: .min-h-{size}
    */

    minHeight: {
      '0': '0',
      'full': '100%',
      'screen': '100vh'
    },

    /*
    |-----------------------------------------------------------------------------
    | Maximum width                        https://tailwindcss.com/docs/max-width
    |-----------------------------------------------------------------------------
    | Class name: .max-w-{size}
    */

    maxWidth: {
      'none': 'none',
      'xs': '20rem',
      'sm': '30rem',
      'md': '40rem',
      'lg': '50rem',
      'xl': '60rem',
      '2xl': '70rem',
      'site': '75rem',
      '3xl': '80rem',
      '4xl': '90rem',
      '5xl': '100rem',
      "1/2": "50%",
      "1/3": "33%",
      "1/4": "25%",
      "1/5": "20%",
      'full': '100%',
      'double': '200%',
    },

    /*
    |-----------------------------------------------------------------------------
    | Maximum height                      https://tailwindcss.com/docs/max-height
    |-----------------------------------------------------------------------------
    | Class name: .max-h-{size}
    */

    maxHeight: {
      '12': '3rem',
      '13': '3.125rem',
      '16': '4rem',
      '20': '5rem',
      '24': '6rem',
      '32': '8rem',
      '48': '12rem',
      '64': '16rem',
      '75': '18.75rem',
      '80': '20rem',
      "1/2": "50%",
      'full': '100%',
      'screen': '100vh',
    },

    /*
    |-----------------------------------------------------------------------------
    | Padding                                https://tailwindcss.com/docs/padding
    |-----------------------------------------------------------------------------
    | Class name: .p{side?}-{size}
    */

    padding: {
      'px': '1px',
      '0': '0',
      '1': '0.25rem',
      '2': '0.5rem',
      '3': '0.75rem',
      '4': '1rem',
      '6': '1.5rem',
      '8': '2rem',
      '10': '2.5rem',
      '12': '3rem',
      '16': '4rem',
      '20': '5rem',
      '24': '6rem',
      '28': '7rem',
      '32': '8rem',
      '40': '10rem',
      '60': '15rem',
      '1/10': '10%',
      '2/10': '20%',
      '1/3': '33%',
    },

    /*
    |-----------------------------------------------------------------------------
    | Margin                                  https://tailwindcss.com/docs/margin
    |-----------------------------------------------------------------------------
    | Class name: .m{side?}-{size}
    */

    margin: {
      auto: 'auto',
      px: '1px',
      0: '0',
      1: '0.25rem',
      2: '0.5rem',
      3: '0.75rem',
      4: '1rem',
      6: '1.5rem',
      8: '2rem',
      10: '2.5rem',
      12: '3rem',
      16: '4rem',
      18: '4.25rem',
      20: '4.5rem',
      22: '4.75rem',
      24: '5rem',
      26: '5.25rem',
      28: '5.5rem',
      30: '5.75rem',
      32: '6rem',
      36: '7rem',
      48: '8rem',
      52: '9rem',
      56: '10rem',
      64: '12rem',
    },

    /*
    |-----------------------------------------------------------------------------
    | boxShadow                                https://tailwindcss.com/docs/box-shadow/
    |-----------------------------------------------------------------------------
    | Class name: .shadow-{size?}
    */

    boxShadow: {
      default: '0 2px 4px 0 rgba(0,0,0,0.10)',
      'md': '0 4px 8px 0 rgba(0,0,0,0.12), 0 2px 4px 0 rgba(0,0,0,0.08)',
      'lg': '0 15px 30px 0 rgba(0,0,0,0.11), 0 5px 15px 0 rgba(0,0,0,0.08)',
      'inner': 'inset 0 2px 4px 0 rgba(0,0,0,0.06)',
      'none': 'none',
    },

    /*
    |-----------------------------------------------------------------------------
    | Z-index                                https://tailwindcss.com/docs/z-index
    |-----------------------------------------------------------------------------
    | Class name: .z-{index}
    */

    zIndex: {
      'auto': 'auto',
      '0': 0,
      '10': 10,
      '20': 20,
      '30': 30,
      '40': 40,
      '50': 50,
    },

    /*
    |-----------------------------------------------------------------------------
    | Opacity                                https://tailwindcss.com/docs/opacity
    |-----------------------------------------------------------------------------
    | Class name: .opacity-{name}
    */

    opacity: {
      '0': '0',
      '25': '.25',
      '50': '.5',
      '65': '.65',
      '75': '.75',
      '100': '1',
    },

    /*
    |-----------------------------------------------------------------------------
    | SVG                                   https://tailwindcss.com/docs/svg
    |-----------------------------------------------------------------------------
    | Class name: .fill-{name}
    */

    fill: {
      'current': 'currentColor',
    },

    /*
    |-----------------------------------------------------------------------------
    | SVG stroke                                 https://tailwindcss.com/docs/svg
    |-----------------------------------------------------------------------------
    | Class name: .stroke-{name}
    */

    stroke: {
      'current': 'currentColor',
    },

    container: {},
  },

  /*
  |-----------------------------------------------------------------------------
  | Modules                  https://tailwindcss.com/docs/configuration#modules
  |-----------------------------------------------------------------------------
  |
  | Here is where you control which modules are generated and what variants are
  | generated for each of those modules.
  |
  | Currently supported variants: 'responsive', 'hover', 'focus'
  |
  | To disable a module completely, use `false` instead of an array.
  |
  */

  variants: {
    appearance: ['responsive'],
    backgroundAttachment: ['responsive'],
    backgroundColors: ['responsive', 'hover'],
    backgroundPosition: ['responsive'],
    backgroundRepeat: ['responsive'],
    backgroundSize: ['responsive'],
    borderColors: ['responsive', 'hover'],
    borderRadius: ['responsive'],
    borderStyle: ['responsive', 'hover'],
    borderWidths: ['responsive', 'hover'],
    cursor: ['responsive'],
    display: ['responsive'],
    flexbox: ['responsive'],
    float: ['responsive'],
    fonts: ['responsive'],
    fontWeights: ['responsive', 'hover'],
    height: ['responsive'],
    leading: ['responsive'],
    lists: ['responsive'],
    margin: ['responsive'],
    maxHeight: ['responsive'],
    maxWidth: ['responsive'],
    minHeight: ['responsive'],
    minWidth: ['responsive'],
    negativeMargin: ['responsive'],
    opacity: ['responsive'],
    overflow: ['responsive'],
    padding: ['responsive'],
    pointerEvents: ['responsive'],
    position: ['responsive'],
    resize: ['responsive'],
    shadows: ['responsive'],
    svgFill: [],
    svgStroke: [],
    textAlign: ['responsive'],
    textColors: ['responsive', 'hover'],
    textSizes: ['responsive'],
    textStyle: ['responsive', 'hover'],
    tracking: ['responsive'],
    userSelect: ['responsive'],
    verticalAlign: ['responsive'],
    visibility: ['responsive'],
    whitespace: ['responsive'],
    width: ['responsive'],
    zIndex: ['responsive'],
  },
  corePlugins: {},
  plugins: [],
}
