// src/styles/commonStyles.ts
import { SxProps, Theme } from '@mui/system';

export const sizeStyles: Record<string, SxProps<Theme>> = {
  small: {
    padding: '7px 16px',
    fontSize: '13px',
    lineHeight: '140%',
  },
  medium: {
    padding: '10px 24px',
    fontSize: '14px',
    lineHeight: '140%',
  },
  large: {
    padding: '13px 24px',
    fontSize: '15px',
    lineHeight: '140%',
  },
};

export const inputStlyes: Record<string, SxProps<Theme>> = {
  small: {
    '& .MuiInputBase-input': {
      padding: '7px 16px',
      fontSize: '13px',
      lineHeight: '140%',
    },
  },
  medium: {
    '& .MuiInputBase-input': {
      padding: '10px 24px',
      fontSize: '14px',
      lineHeight: '140%',
    },
  },
  large: {
    '& .MuiInputBase-input': {
      padding: '13px 24px',
      fontSize: '15px',
      lineHeight: '140%',
    },
  },
}