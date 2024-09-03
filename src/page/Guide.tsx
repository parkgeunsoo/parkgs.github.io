import React from 'react';
import { useTheme } from '@mui/material/styles';
import { SxProps, Theme, Stack, ThemeProvider } from '@mui/system';
import { Placeholder } from 'react-bootstrap';
import MenuButton from '../components/MenuButton';
import CustomInput from '../components/CustomInput';
import theme from '../components/Theme';
import CustomSelect from '../components/CustomSelect';
const Guide = () => {

    const theme = useTheme();
    const customStackStyle: SxProps<Theme> = {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        gap: 4,
        marginBottom: 2,
    }
    const selectOptions = [
        { value: 'option1', label: 'Option 1' },
        { value: 'option2', label: 'Option 2' },
        { value: 'option3', label: 'Option 3' },
    ];
    

    return (
        <>
            <ThemeProvider theme={theme}>
                <div>
                    <Stack sx={customStackStyle}>
                        <MenuButton size="medium" outline={`1px solid ${theme.customColors.pink500}`} >Large Button</MenuButton>
                        <MenuButton size="medium" outline={`1px solid ${theme.customColors.g2}`} >Medium Button</MenuButton>
                        <MenuButton size="medium" outline={`1px solid ${theme.customColors.g2}`} >Small Button</MenuButton>
                    </Stack>

                    <Stack sx={customStackStyle}>
                        <MenuButton size="large" bgColor={theme.customColors.pink200}  >Large Button</MenuButton>
                        <MenuButton size="medium" bgColor={theme.customColors.pink200} >Medium Button</MenuButton>
                        <MenuButton size="small"  bgColor={theme.customColors.pink200}>Small Button</MenuButton>
                    </Stack>
                    <Stack sx={customStackStyle}>
                        <MenuButton size="large" bgColor={theme.customColors.pink500} >Large Button</MenuButton>
                        <MenuButton size="medium" bgColor={theme.customColors.pink500} >Medium Button</MenuButton>
                        <MenuButton size="small"  bgColor={theme.customColors.pink500}>Small Button</MenuButton>
                    </Stack>
                    <Stack sx={customStackStyle}>
                        <MenuButton size="large" bgColor={theme.customColors.pink700}>Large Button</MenuButton>
                        <MenuButton size="medium" bgColor={theme.customColors.pink700} >Medium Button</MenuButton>
                        <MenuButton size="small"  bgColor={theme.customColors.pink700}>Small Button</MenuButton>
                    </Stack>
                    <Stack sx={customStackStyle}>
                        <MenuButton size="large" outline={`1px solid ${theme.customColors.pink500}`} icon="plus" >대화 상대 추가하기</MenuButton>
                        <MenuButton size="large" outline={`1px solid ${theme.customColors.g4}`} icon="grayPlus" >text</MenuButton>
                    </Stack>

                    <Stack sx={customStackStyle}>
                        <CustomInput size='medium' placeholder="medium input" icon='search' />
                        <CustomInput size='medium' placeholder="medium input"  />
                        <CustomSelect size='medium' placeholder='medium' selectOptions={selectOptions}  />
                        <CustomInput size='medium' placeholder="medium input" />
                    </Stack>

                </div>
            </ThemeProvider>
        </>
    );
};

export default Guide;