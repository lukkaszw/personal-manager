const headerHeight = '36px';
const smallHeaderHeight = '30px';
const stretchedFooterHeight = '215px';
const smallFooterHeight = '100px';

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
    pageHeight: {
      // min. page height for big screen = 100vh - header height - stretched footer height
      big: `calc(100vh - ${headerHeight} - ${stretchedFooterHeight})`,
      //min. page height for small screen = 100vh - header height
      small: `calc(100vh - ${smallHeaderHeight} - ${smallFooterHeight})`,
      // min. page height for small horizontal
      smallHorizontal: `calc(100vh - ${smallHeaderHeight})`,
    },
    header: {
      normal: {
        height: headerHeight,
        linkFont: '14px',
      },
      small: {
        height: smallHeaderHeight,
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
    title: {
      big: '22px',
      small: '18px',
    },
    smallTitle: {
      font: '20px',
    },
    formsWidth: {
      budget: '320px',
      note: '600px',
      task: '600px',
      transaction: '280px',
      passwordUpdate: '260px',
      personalData: '260px',
    },
  },
  fonts: {
    primary: "Roboto', sans-serif",
    decorative: "'Courgette',cursive",
  },
  margins: {
    small: '16px',
    normal: '24px',
    big: '36px',
  }
}

export default theme;