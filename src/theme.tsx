import { DefaultTheme } from '@react-navigation/native';
export type ExtendedTheme = {
  dark: boolean,
  colors: {
    dark: string,
    muted: string,
    title: string,
    primary: string,
    recommendation3: string,
    recommendation2: string,
    background: string,
    card: string,
    text: string,
    border: string,
    notification: string,
    search: string,
  },
  textVariants: {
    header: {
      color: string,
      fontFamily: string,
      fontSize: number,
      fontWeight: string
    },
    body: {
      fontFamily: string,
      fontSize: number,
      fontWeight: string,
      color: string,
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
  darkYellow: '#FFB800',
  grey_translucent: 'rgba(255, 255, 255, 0.1)'
}

export const YingshiDarkTheme: ExtendedTheme = {
  dark: true,
  colors: {
    dark: palette.dark,
    muted: palette.grey,
    title: palette.yellow,
    primary: palette.yellow,
    recommendation2: palette.orange,
    recommendation3: palette.darkYellow,
    background: palette.dark,
    card: palette.dark,
    text: palette.white,
    border: palette.dark,
    notification: palette.yellow,
    search: palette.grey_translucent,
  },
  textVariants: {
    header: {
      color: palette.white,
      fontFamily: 'PingFang SC',
      fontSize: 20,
      fontWeight: '800'
    },
    body: {
      fontFamily: 'PingFang SC',
      fontSize: 16,
      fontWeight: '400',
      color: palette.white,
    },
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
};

export const YingshiLightTheme: ExtendedTheme = {
  ...DefaultTheme,
  dark: false,
  colors: {
    dark: palette.dark,
    muted: palette.grey,
    title: palette.yellow,
    primary: palette.yellow,
    recommendation2: palette.orange,
    recommendation3: palette.darkYellow,
    background: palette.dark,
    card: palette.dark,
    text: palette.white,
    border: palette.dark,
    notification: palette.yellow,
    search: palette.grey_translucent,
  },
  textVariants: {
    header: {
      fontFamily: 'PingFang SC',
      fontSize: 50,
      fontWeight: '800',
      color: palette.white,
    },
    body: {
      fontFamily: 'PingFang SC',
      fontSize: 16,
      fontWeight: '400',
      color: palette.white,
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