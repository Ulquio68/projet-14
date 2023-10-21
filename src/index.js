import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Error from './Components/error';
import Home from './Pages/index';
import Employee from './Pages/employee';
import { AppProvider } from './context';

ReactDOM.render(
    <AppProvider>
        <Router>
            <Routes>
                <Route path="/index" element={<Home />} />
                <Route path="/employee-list" element={<Employee />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </Router>
    </AppProvider>,
    document.getElementById('root')
);
