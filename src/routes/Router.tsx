import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainPage from '../page/MainPage';
import Kitchen from '../page/prodectDetails/Kitchen';
import Bath from '../page/prodectDetails/Bath';
import Door from '../page/prodectDetails/Door';
import InterlockingDoor from '../page/prodectDetails/InterlockingDoor';
import Window from '../page/prodectDetails/Window';
import WallFinish from '../page/prodectDetails/WallFinish';
import Film from '../page/prodectDetails/Film';
import BuiltInCloset from '../page/prodectDetails/BuiltInCloset';

const AppRouter = () => {
    console.log("AppRouter component mounted");
    return (
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/kitchen" element={<Kitchen />} />
            <Route path="/bath" element={<Bath />} />
            <Route path="/door" element={<Door />} />
            <Route path="/interlockingDoor" element={<InterlockingDoor />} />
            <Route path="/window" element={<Window />} />
            <Route path="/wallFinish" element={<WallFinish />} />
            <Route path="/film" element={<Film />} />
            <Route path="/builtInCloset" element={<BuiltInCloset />} />
        </Routes>
    );
};

export default AppRouter;