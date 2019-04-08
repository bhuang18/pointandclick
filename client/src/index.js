import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

const styles = {
    body: {
        margin: 0,
        padding: 0
    },
    html: {
        margin: 0,
        padding: 0
    }
};

ReactDOM.render(<App style={styles}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();