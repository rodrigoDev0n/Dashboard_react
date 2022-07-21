import React from 'react';
import { Route, Routes, BrowserRouter, } from 'react-router-dom';
import { Login } from './components/Login';
import { Dashboard } from './components/Dashboard/Dashboard';

export const App = () => {
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/Dashboard' element={<Dashboard />} />
            </Routes>
        </BrowserRouter>
    </>
  )
}
