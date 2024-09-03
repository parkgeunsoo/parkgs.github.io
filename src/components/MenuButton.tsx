// src/components/MenuButton.tsx
import React from 'react';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';
import { sizeStyles } from './CommonStyles';

import PlusIcon from '../assets/icons/icon-plus.svg';
import GrayPlusIcon from '../assets/icons/icon-gray-plus.svg';

interface MenuButtonProps {
  size: 'small' | 'medium' | 'large';
  children: React.ReactNode;
  bgColor?: string;
  outline?: string;
  icon?: 'plus' | 'grayPlus' | null;
}

const MenuButton: React.FC<MenuButtonProps> = ({ size, children, bgColor, outline, icon }) => {
  const theme = useTheme();
  const outlineColor = outline ? outline.match(/(\#[a-fA-F0-9]{6}|\#[a-fA-F0-9]{3})/)?.[0] : theme.palette.primary.main;

  return (
    <Button
      variant="contained"
      sx={{
        ...sizeStyles[size],
        width: 'auto',
        backgroundColor: outline ? 'white' : bgColor || theme.palette.primary.main,
        color: outline ? outlineColor : 'inherit',
        border: outline ? outline : 'none',
        boxShadow: 'none',
        ':hover': {
          backgroundColor: outline ? 'rgba(0, 0, 0, 0.10)' : theme.palette.primary.dark,
          color: outline ? outlineColor : 'white',
          border: outline ? outline : 'none',
        },
      }}
      >
      {icon === 'plus' && <img src={PlusIcon} alt="plus icon" style={{ marginRight: '8px', width:'16px', height:'16px' }} />}
      {icon === 'grayPlus' && <img src={GrayPlusIcon} alt="plus icon" style={{ marginRight: '8px', width:'16px', height:'16px' }} />}
      {children}
    </Button>
  );
};

export default MenuButton;