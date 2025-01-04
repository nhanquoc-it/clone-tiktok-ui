import Header from '~/components/Layout/components/Header/Header.jsx';
import Sidebar from './Sidebar/Sidebar.jsx';
import React from 'react';

const DefaultLayout = ({ children }) => {
    return (
        <div>
            <Header />
            <div className="container">
                <Sidebar />
                <div className="content">{children}</div>
            </div>
        </div>
    );
};

export default DefaultLayout;
