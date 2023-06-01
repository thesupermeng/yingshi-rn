const palette = {
    dark: '#161616',
    grey: '#2D2D2D',
    yellow: '#FAC33D',
    white: '#FFFFFF',
    purple: '#5A31F4',
    green: '#0ECD9D',
    red: '#CD0E61'
}

export const theme = {
  colors: {
    background: palette.white,
    foreground: palette.black,
    primary: palette.purple,
    success: palette.green,
    danger: palette.red,
    failure: palette.red,
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
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
  }
};

export const darkTheme = {
  ...theme,
  colors: {
    ...theme.colors,
    background: palette.dark,
    foreground: palette.white,
  }
}