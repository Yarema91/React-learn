import React from 'react';
import ReactDOM from 'react-dom';

// import App from './components/App'
import App from './components/App/app';
import { AppContextProvider } from './providers/context';

ReactDOM.render(<App/>, document.getElementById('root'));
ReactDOM.render(
    <AppContextProvider>
        <App/>
    </AppContextProvider>, document.getElementById('root'));