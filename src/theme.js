export const themeStyles = {
  colors: {
    brand: {
      primaryColor: '#212121',
      secondaryColor: '#778899',
      accentColor: '#ff6b08',
      bckgColor: '#f2f5f8',
      borderColor: '#e7eaed',
      footerColor: 'rgb(236, 239, 241)',
      lightGreyColor: '#EDF2F7',
    },
  },

  variants: {
    'with-shadow': {
      boxShadow:
        '1px 4px 6px rgba(0, 0, 0, 0.16), 0px 4px 4px rgba(0, 0, 0, 0.06), 0px 1px 1px rgba(0, 0, 0, 0.12)',
    },
  },

  shadows: { outline: '0 0 0 1px var(--chakra-colors-orange-200)' },

  components: {
    Input: {
      defaultProps: {
        focusBorderColor: 'orange.200',
      },
    },

    Textarea: {
      defaultProps: {
        focusBorderColor: 'orange.200',
      },
    },

    Select: {
      defaultProps: {
        focusBorderColor: 'orange.200',
      },
    },
  },
};
