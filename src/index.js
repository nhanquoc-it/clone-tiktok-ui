import React from 'react';
import ReactDOM from 'react-dom';
import App from '~/App';
import GlobalStyles from '~/components/GlobalStyles/GlobalStyles';

ReactDOM.render(
    <React.StrictMode>
        <GlobalStyles>
            <App />
        </GlobalStyles>
    </React.StrictMode>,
    document.getElementById('root'),
);
