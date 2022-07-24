import React from 'react';
import { Route, Routes, BrowserRouter, } from 'react-router-dom';
import { Login } from './components/Login';
import { Dashboard } from './components/Dashboard/Dashboard';
import { Charts } from './components/Dashboard/Charts';
import { Students } from './components/students/Students';

export const App = () => {
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/Dashboard' element={<Dashboard />} />
                <Route path='/charts' element={<Charts />} />
                <Route path='/Students' element={<Students />} />
            </Routes>
        </BrowserRouter>
    </>
  )
}
