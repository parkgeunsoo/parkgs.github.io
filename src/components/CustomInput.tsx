import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { SxProps, Theme } from '@mui/system';
import { useTheme } from '@mui/material/styles';

import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';

import SearchIcon from '../assets/icons/icon-search.svg'; 
import CloseIcon from '../assets/icons/icon-close.svg';

interface CustomInputProps {
  size: 'small' | 'medium' | 'large',
  placeholder?: string;
  icon?: 'search'
}

const sizeStyles: Record<CustomInputProps['size'], SxProps<Theme>> = {
  small: {
    '& .MuiInputBase-input': {
      padding: '7px 16px',
      fontSize: '13px',
      lineHeight: '140%',
    },
  },
  medium: {
    '& .MuiInputBase-input': {
      padding: '10px 34px 10px 20px !important',
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
};

const CustomInput: React.FC<CustomInputProps> = ({ size, placeholder, icon }) => {
    const theme = useTheme();
    const [value, setValue] = useState('');
    const handleClear = () => {
        setValue('');
    }
    const iconSrc = icon === 'search' ? SearchIcon : null;

    return (
    <TextField
        variant="outlined"
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        InputProps={{
          startAdornment: icon === 'search' ? (
            <InputAdornment position="start">
              <Box
                component="img"
                src={SearchIcon}
                alt="Search Icon"
                sx={{ 
                  width: 18, 
                  height: 18, 
                  zIndex: 10,
                  position: 'absolute',
                  top: '50%',
                  left: '14px',
                  transform: 'translateY(-50%)',
                }}
              />
            </InputAdornment>
          ) : null,
          endAdornment: value ? (
            <InputAdornment 
              position="end"
              sx={{
                position: 'absolute',
                top: '50%',
                right: '14px',
                transform: 'translateY(-50%)',
              }}
            >
              <IconButton onClick={handleClear}>
                <Box
                  component="img"
                  src={CloseIcon}
                  alt="Close Icon"
                  sx={{ 
                    width: 16, 
                    height: 16, 
                    zIndex: 10,
                  }}
                />
              </IconButton>
            </InputAdornment>
          ) : null,
          sx: {
            ...sizeStyles[size],
            width: "240px",
            boxSizing: 'border-box',
            color: theme.customColors.bk,
            backgroundColor:theme.customColors.g6,
            borderRadius: "24px",
            ':focus': {
              outline: "none"
            },
            '::placeholder': {
              color: theme.customColors.g3
            },
          },
        }}
        sx={{
          width: '100%',
          '.MuiOutlinedInput-root': {
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: 'inherit',
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: 'inherit',
            },
            '&:focus .MuiOutlinedInput-notchedOutline': {
              borderColor: 'inherit',
            },
          },
        }}
      />
    );
};

export default CustomInput;