import React, { useEffect } from 'react';
import './App.css';
import AppRouter from "./routes/Router";
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import { BrowserRouter as Router } from 'react-router-dom';

// 테마
import { ThemeProvider } from '@mui/material/styles';
import theme from './components/Theme';

import AOS from 'aos';
import 'aos/dist/aos.css';

const App: React.FC = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false,
            offset: 100,
        });
        AOS.refresh();
        console.log("App component mounted");
    }, []);

    return (
        <>
         <Router basename="/parkgs.github.io">
            {/* <Header /> */}
            <ThemeProvider theme={theme}>
                <AppRouter />
            </ThemeProvider>
            {/* <Footer /> */}
         </Router>
        </>
    );
}

export default App;