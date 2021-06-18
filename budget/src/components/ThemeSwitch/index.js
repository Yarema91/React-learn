import React, { useContext } from 'react';
import { AppContext } from '../../providers/context';
import { THEMES } from '../../providers/themes/themeList';


export const ThemeSwitch = () => {
    const { state, dispatch } = useContext(AppContext);
//     const themeToggler = () => {
//  setTheme === 'light' ? THEMES.LIGHT : THEMES.DARK
//     }
    return (
        <>
            {/* <button onClick={() =>themeToggler(THEMES)}>Change color</button> */}
        </>
    )

}