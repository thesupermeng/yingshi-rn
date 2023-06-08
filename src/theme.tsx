import { DefaultTheme } from '@react-navigation/native';
export type ExtendedTheme = {
  dark: boolean,
  colors: {
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
    bigHeader: {
      color: string,
      fontFamily: string,
      fontSize: number,
      fontWeight: string
    },
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
  icons: {
    activeNavIconColor: string,
    iconColor: string
  }
};

// Add color palettes here:
const palette = {
  dark: '#161616',
  light_grey: '#D9D9D9',
  grey: '#2D2D2D',
  yellow: '#FAC33D',
  white: '#FFFFFF',
  purple: '#5A31F4',
  green: '#0ECD9D',
  red: '#CD0E61',
  orange: '#FF8A00',
  darkYellow: '#FFB800',
  grey_translucent_1: 'rgba(255, 255, 255, 0.1)',
  grey_translucent_3: 'rgba(255, 255, 255, 0.3)',
  dark_grey_translucent: 'rgba(169, 169, 169, 0.15)',
  off_white: 'rgba(255, 255, 255, 0.92)',
  blue: '#1778F2',
}

export const YingshiDarkTheme: ExtendedTheme = {
  dark: true,
  colors: {
    muted: palette.grey_translucent_3,
    title: palette.yellow,
    primary: palette.yellow,
    recommendation2: palette.orange,
    recommendation3: palette.darkYellow,
    background: palette.dark,
    card: palette.dark,
    text: palette.white,
    border: palette.dark,
    notification: palette.yellow,
    search: palette.grey_translucent_1,
  },
  textVariants: {
    bigHeader: {
      color: palette.white,
      fontFamily: 'PingFang SC',
      fontSize: 24,
      fontWeight: '800'
    },
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
  icons: {
    activeNavIconColor: palette.yellow,
    iconColor: palette.white
  }
};

export const YingshiLightTheme: ExtendedTheme = {
  ...DefaultTheme,
  dark: false,
  colors: {
    muted: palette.light_grey,
    title: palette.white,
    primary: palette.blue,
    recommendation2: palette.orange,
    recommendation3: palette.darkYellow,
    background: palette.white,
    card: palette.off_white,
    text: palette.dark,
    border: palette.grey_translucent_3,
    notification: palette.blue,
    search: palette.dark_grey_translucent,
  },
  textVariants: {
    bigHeader: {
      color: palette.dark,
      fontFamily: 'PingFang SC',
      fontSize: 24,
      fontWeight: '800'
    },
    header: {
      fontFamily: 'PingFang SC',
      fontSize: 20,
      fontWeight: '800',
      color: palette.dark,
    },
    body: {
      fontFamily: 'PingFang SC',
      fontSize: 16,
      fontWeight: '400',
      color: palette.dark,
    },
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  icons: {
    activeNavIconColor: palette.blue,
    iconColor: palette.dark
  }
};

declare module '@react-navigation/native' {
  export function useTheme(): ExtendedTheme;
}