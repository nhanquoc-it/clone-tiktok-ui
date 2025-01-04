import Header from '~/components/Layout/components/Header/Header.jsx';
import React from 'react';

const HeaderOnly = ({ children }) => {
    return (
        <div>
            <Header />
            <div className="container">
                <div className="content">{children}</div>
            </div>
        </div>
    );
};

export default HeaderOnly;
