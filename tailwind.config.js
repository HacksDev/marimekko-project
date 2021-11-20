module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'sans': ['Helvetica Neue','Helvetica','Arial','sans-serif'],
      'serif': ['Helvetica Neue','Helvetica','Arial','sans-serif'],
      'mono': ['Helvetica Neue','Helvetica','Arial','sans-serif'],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      {
        'default': {
          'primary': '#BFB8E3',
          'primary-focus': '#9F98C3',
          'primary-content': '#ffffff',
          'secondary': '#A1C8E9',
          'secondary-focus': '#85a7c2',
          'secondary-content': '#ffffff',
          'accent': '#ff0000',
          'accent-focus': '#2aa79b',
          'accent-content': '#ffffff',
          'neutral': '#3d4451',
          'neutral-focus': '#2a2e37',
          'neutral-content': '#ffffff',
          'base-100': '#ffffff',
          'base-200': '#f9fafb',
          'base-content': '#1F2937',
          'info': '#2094f3',
          'success': '#009485',
          'warning': '#ff9900',
          'error': '#ff5724',
        },
      },
    ],
  },
}
