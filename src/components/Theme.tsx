// src/theme.ts
import { createTheme, Theme as MuiTheme } from '@mui/material/styles';

// Custom Theme Interface
interface CustomTheme {
  customColors: {
    pink700: string;
    pink500: string;
    pink200: string,
    pink50: string,
    orange700: string;
    orange500: string;
    orange200: string,
    orange50: string,
    green700: string;
    green500: string;
    green200: string,
    green50: string,
    bk: string;
    g1: string;
    g2: string;
    g3: string;
    g4: string;
    g5: string;
    g6: string;
  };
}

// MUI의 Theme와 CustomTheme을 병합합니다.
declare module '@mui/material/styles' {
  interface Theme extends CustomTheme {}
  interface ThemeOptions extends Partial<CustomTheme> {}
}

const theme = createTheme({
  palette: {
    primary: {
      main: '#FC7373',
    },
    secondary: {
      main: '#dc004e',
    },
  },
  customColors: {
    pink700: '#B05050', // Custom 색상
    pink500: '#FC7373',
    pink200: '#FFEEEE',
    pink50: '#FFF8F8',
    orange700:'#B34A0F',
    orange500:'#B34A0F',
    orange200:'#FFEDE3',
    orange50: '#FFF8F3',
    green700: '#064130',
    green500: '#085D44',
    green200: '#E1ECE9',
    green50: '#F3F7F6',
    bk: '#000000',
    g1: 'rgba(0, 0, 0, 0.8)',
    g2: 'rgba(0, 0, 0, 0.6)',
    g3: 'rgba(0, 0, 0, 0.4)',
    g4: 'rgba(0, 0, 0, 0.2)',
    g5: 'rgba(0, 0, 0, 0.1)',
    g6: 'rgba(0, 0, 0, 0.04)',
  },
});

export default theme;