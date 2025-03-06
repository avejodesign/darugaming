const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
  theme: {
    container: {
      // you can configure the container to be centered
      center: true,

      // or have default horizontal padding
      padding: '1rem',

      // default breakpoints but with 40px removed
      screens: {
        sm: '100%',
        md: '100%',
        lg: '100%',
        xl: '1280px',
        '2xl': '1440px',
      },
    },
  },  
};

export default config;
