const theme = {
  palette: {
    primary: {
      main: '#1161ae',
      darker: '#00509d',
      darkest: '#001F3F',
    },
    secondary: {
      main: '#ff2d27',
    },
    tertiary: {
      main: '#32cd32',
    },
    disabled: {
      main: '#555',
    },
    background: {
      lighten: '#fff',
      main: '#fafafa',
      dark: '#222',
      disabled: '#999',
    },
    font: {
      primary: {
        main: '#000',
        lighten: '#555',
      },
      secondary: {
        main: '#fff',
        darker: '#bbb',
      },
      tertiary: {
        main: '#00509d',
      },
    },
    icon: {
      very_positive: '#32CD32',
      positive: '#2E8B57',
      neutral: '#DAA520',
      negative: '#FF0000',
    },
    special: {
      titleBackground: 'linear-gradient(to right, #ffaa00, #f2e86d 10%, #22a726, #006ba6)',
    },
  },
  sizes: {
    header: {
      normal: {
        height: '36px',
        linkFont: '14px',
      },
      small: {
        height: '30px',
        linkFont: '12px',
      },
    },
    mobileMenu: {
      linkWidth: '180px',
      linkHeight: '28px',
      font: '16px',
    },
    footer: {
      copyright: {
        font: '12px',
      },
      iconButton: {
        big: '42px',
        small: '28px',
        title: {
          big: '18px',
          small: '13px',
        },
      },
      categoryPart: {
        icon: {
          big: '24px',
          small: '20px',
        },
        link: {
          big: '16px',
          small: '14px',
        }
      },
      footerContent: {
        big: '100px',
        small: '130px',
      }
    },
    smallTitle: {
      font: '22px',
    }
  },
  fonts: {
    primary: "Roboto', sans-serif",
    decorative: "'Courgette',cursive",
  },
}

export default theme;