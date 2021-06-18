import React, {useContext, Profiler} from 'react';
import { ThemeProvider } from 'styled-components';
import App from './app';
import {AppContext} from '../../providers/context';
import getTheme from '../../providers/themes/getTheme';

export default () => {
    const {state, dispatch } = useContext(AppContext);

    const onRender = (...data) => {
        console.log(data);
    };
    return (
        <ThemeProvider theme={getTheme(state.themeName)}>
                    <App/>
        </ThemeProvider>
    )
}