import React from 'react';
import { connect } from 'react-redux';
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

const MenuBar = ({ isAuthenticated }) => (
    
    <header>
        <CssBaseline />
        <AppBar position="relative">
        <Toolbar style={styles.Toolbar}>
        
        {/* style={styles.header} */}
        <Navigation />
            {isAuthenticated ? <UserMenu /> : <AuthNav />}
            </Toolbar>
         </AppBar>
    </header>
);

const mapStateToProps = state => ({
    isAuthenticated: authSelectors.getIsAuthenticated(state),
});

export default connect(mapStateToProps)(MenuBar);
