import Header from '~/components/Layouts/components/Header/Header.jsx';
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
