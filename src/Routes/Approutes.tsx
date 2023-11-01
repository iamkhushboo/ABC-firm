import React from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import MainPage from '../MainPage/MainPage';
import Dashboard from '../Component/Dashboard/Dashboard';
import AllFiles from '../Component/AllFiles/AllFiles';
import Integrations from '../Component/Integrations/Integrations';
import Trash from '../Component/Trash/Trash';
import Settings from '../Component/Settings/Settings';
import HelpandSupport from '../Component/HelpandSupport/HelpandSupport';
import Saved from '../Component/Saved/Saved';

const routes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<MainPage />}>
                    <Route path='' element={<Dashboard />} />
                    <Route path='AllFiles' element={<AllFiles />} />
                    <Route path='Saved' element={<Saved />} />
                    <Route path='Integration' element={<Integrations />} />
                    <Route path='Trash' element={<Trash />} />
                    <Route path='Setting' element={<Settings />} />
                    <Route path='HelpandSupprot' element={<HelpandSupport />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default routes
