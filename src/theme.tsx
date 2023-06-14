import { DefaultTheme } from '@react-navigation/native';
export type ExtendedTheme = {
  dark: boolean,
  colors: {
    muted: string,
    sliderDot: string,
    title: string,
    primary: string,
    recommendation3: string,
    recommendation2: string,
    background: string,
    card: string,
    card2: string,
    text: string,
    border: string,
    notification: string,
    search: string,
    button: string,
    playlistFavorite: string,
    loading: string,
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
    xxs: number,
    xs: number,
    s: number,
    m: number,
    l: number,
    xl: number,
  },
  icons: {
    activeNavIconColor: string,
    iconColor: string,
    sizes: {
      s: number,
      m: number,
      l: number,
      xl: number
    }
  }
};

// Add color palettes here:
const palette = {
  dark: '#161616',
  black: '#000000',
  light_grey: '#D9D9D9',
  grey: '#2D2D2D',
  yellow: '#FAC33D',
  white: '#FFFFFF',
  purple: '#5A31F4',
  green: '#0ECD9D',
  red: '#CD0E61',
  orange: '#FF8A00',
  dark_yellow: '#FFB800',
  grey_translucent_1: 'rgba(255, 255, 255, 0.1)',
  grey_translucent_3: 'rgba(255, 255, 255, 0.3)',
  dark_grey_translucent: 'rgba(169, 169, 169, 0.15)',
  off_white: 'rgba(255, 255, 255, 0.92)',
  blue: '#1778F2',
  grey2: '#9C9C9C',
  lighter_dark: '#1D2023',
  light_grey2: 'rgba(201, 201, 201, 0.1)',
  dark_grey: '#303030'
}

export const YingshiDarkTheme: ExtendedTheme = {
  dark: true,
  colors: {
    sliderDot: palette.grey_translucent_3,
    muted: palette.grey2,
    title: palette.yellow,
    primary: palette.yellow,
    recommendation2: palette.orange,
    recommendation3: palette.dark_yellow,
    background: palette.dark,
    card: palette.dark,
    card2: palette.lighter_dark,
    text: palette.white,
    border: palette.dark,
    notification: palette.yellow,
    search: palette.grey_translucent_1,
    button: palette.grey2,
    playlistFavorite: palette.dark_grey,
    loading: palette.grey,
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
    xxs: 4,
    xs: 8,
    s: 12,
    m: 16,
    l: 24,
    xl: 40,
  },
  icons: {
    activeNavIconColor: palette.yellow,
    iconColor: palette.white,
    sizes: {
      s: 12,
      m: 18,
      l: 24,
      xl: 32
    }
  }
};

export const YingshiLightTheme: ExtendedTheme = {
  ...DefaultTheme,
  dark: false,
  colors: {
    sliderDot: palette.light_grey,
    muted: palette.grey2,
    title: palette.white,
    primary: palette.yellow,
    recommendation2: palette.orange,
    recommendation3: palette.dark_yellow,
    background: palette.white,
    card: palette.off_white,
    card2: palette.light_grey2,
    text: palette.dark,
    border: palette.grey_translucent_3,
    notification: palette.yellow,
    search: palette.dark_grey_translucent,
    button: palette.black,
    playlistFavorite: palette.dark_grey,
    loading: palette.grey,
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
    xxs: 4,
    xs: 8,
    s: 12,
    m: 16,
    l: 24,
    xl: 40,
  },
  icons: {
    activeNavIconColor: palette.yellow,
    iconColor: palette.dark,
    sizes: {
      s: 12,
      m: 18,
      l: 24,
      xl: 32
    }
  }
};

declare module '@react-navigation/native' {
  export function useTheme(): ExtendedTheme;
}