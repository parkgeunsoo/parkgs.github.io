import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainPage from '../page/MainPage';

const AppRouter = () => {
    console.log("AppRouter component mounted");
    return (
        <Routes>
            <Route path="/" element={<MainPage />} />
        </Routes>
    );
};

export default AppRouter;