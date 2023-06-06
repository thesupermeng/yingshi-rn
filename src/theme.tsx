import { DefaultTheme } from '@react-navigation/native';
export type ExtendedTheme = {
  dark: boolean,
  colors: {
    dark: string,
    grey: string,
    yellow: string,
    white: string,
    primary: string,
    orange: string,
    darkYellow: string,
    background: string,
    card: string,
    text: string,
    border: string,
    notification: string,
    search: string,
  },
  textVariants: {
    header: {
      fontFamily: string,
      fontSize: number,
    },
    body: {
      fontFamily: string,
      fontSize: number,
    },
  },
  spacing: {
    s: number,
    m: number,
    l: number,
    xl: number,
  },
};

// Add color palettes here:
const palette = {
  dark: '#161616',
  grey: '#2D2D2D',
  yellow: '#FAC33D',
  white: '#FFFFFF',
  purple: '#5A31F4',
  green: '#0ECD9D',
  red: '#CD0E61',
  orange: '#FF8A00',
  darkYellow: '#FFB800'
}

export const YingshiDarkTheme:ExtendedTheme = {
  dark: true,
  colors: {
    dark: palette.dark,
    grey: palette.grey,
    yellow: palette.yellow,
    white: palette.white,
    primary: palette.yellow,
    orange: palette.orange,
    darkYellow: palette.darkYellow,
    background: palette.dark,
    card: palette.dark,
    text: palette.white,
    border: palette.dark,
    notification: palette.yellow,
    search: 'rgba(255, 255, 255, 0.1)',
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

export const YingshiLightTheme:ExtendedTheme = {
  ...DefaultTheme,
  dark: false,
  colors: {
    dark: palette.dark,
    grey: palette.grey,
    yellow: palette.yellow,
    white: palette.white,
    primary: palette.yellow,
    darkYellow: palette.darkYellow,
    background: palette.dark,
    orange: palette.orange,
    card: palette.dark,
    text: palette.white,
    border: palette.dark,
    notification: palette.yellow,
    search: 'rgba(255, 255, 255, 0.1)',
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

declare module '@react-navigation/native' {
  export function useTheme(): ExtendedTheme;
}