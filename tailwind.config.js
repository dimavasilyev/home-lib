module.exports = {
  purge: ['./components/**/*.js', './pages/**/*.js'],
  theme: {
    extend: {
      backgroundColor: {
        primary: 'var(--bg-background-primary)',
      },
      textColor: {
        primary: 'var(--text-primary)',
        secondary: 'var(--text-secondary)',
      },
    },
  },
  variants: {},
  plugins: [],
};
