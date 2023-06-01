const palette = {
    dark: '#161616',
    grey: '#2D2D2D',
    yellow: '#FAC33D',
    white: '#FFFFFF',
    purple: '#5A31F4',
    green: '#0ECD9D',
    red: '#CD0E61'
}

export const YingshiDarkTheme = {
  dark: false,
  colors: {
    dark: palette.dark,
    grey: palette.grey,
    yellow: palette.yellow,
    white: palette.white,
    primary: palette.yellow,
    background: palette.dark,
    card: palette.dark,
    text: palette.white,
    border: palette.dark,
    notification: palette.yellow,
  },
  textVariants: {
    header: {
        fontFamily: 'PingFang SC',
        fontSize: 18,
    },
    body: {
        fontFamily: 'PingFang SC',
        fontSize: 16,
    },
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
};