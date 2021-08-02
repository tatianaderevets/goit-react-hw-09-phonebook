import React from 'react';
import { NavLink } from 'react-router-dom';

import { Typography } from '@material-ui/core';
import LockIcon from '@material-ui/icons/Lock'


const styles = {
    authItem: {
        marginRight: "10px",
        color: 'white'
},

authNav: {
  display: "flex",
  listStyle: "none",
}
}

const AuthNav = () => (
    <>
        <div style={styles.authNav}>
        <Typography variant="h6">
        <NavLink
            to="/register"
            exact
                    style={styles.authItem}
                    
            
        >
           Registration
                </NavLink>
            </Typography>
            
                <NavLink
                   
            to="/login"
            exact
            // style={{ color: 'white' }}
            // activeStyle={styles.activeLink}
        >
           <LockIcon fontSize="large" style={{ color: 'white' }} />
                </NavLink>
            
            </div>
    </>
);

export default AuthNav;