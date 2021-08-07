import React from 'react';
import { useSelector } from 'react-redux';
import Navigation from './Navigation';
import UserMenu from './UserMenu';
import AuthNav from './AuthNav';
import { authSelectors } from '../redux/auth';

import { AppBar, CssBaseline, Toolbar } from '@material-ui/core';


const styles = {
    Toolbar :
    {
        display: "flex",
        justifyContent: "space-between",
           
}
}

// const mapStateToProps = state => ({
//     isAuthenticated: authSelectors.getIsAuthenticated(state),
// });

// export default connect(mapStateToProps)(MenuBar);

export default function MenuBar() {
    const isLoggedIn = useSelector(authSelectors.getIsAuthenticated);

    return (
    
    <header>
        <CssBaseline />
        <AppBar position="relative">
        <Toolbar style={styles.Toolbar}>
        
        {/* style={styles.header} */}
        <Navigation />
            {isLoggedIn ? <UserMenu /> : <AuthNav />}
            </Toolbar>
         </AppBar>
    </header>
);
}


