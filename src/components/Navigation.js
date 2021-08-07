import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { authSelectors } from '../redux/auth';

import { Typography, CssBaseline } from '@material-ui/core';
import { Home } from '@material-ui/icons';


const styles = {
    navigation :{
  display: "flex",
},

navigationItem: {
  marginRight: "20px",
  color: "white",
}
}

// const mapStateToProps = state => ({
//     isLoggedIn: authSelectors.getIsAuthenticated(state),
// });

// export default connect(mapStateToProps)(Navigation);
 

export default function Navigation() {
  const isLoggedIn = useSelector(authSelectors.getIsAuthenticated);
 return (
    <nav style={styles.navigation}>
        <CssBaseline />
        <NavLink style={styles.navigationItem} exact to="/">
        <Home fontSize="large" style={{ color: 'white' }} />
      </NavLink>

        {isLoggedIn && (
            <Typography variant="h6">
          <NavLink style={styles.navigationItem} exact to="/contacts">
            Phonebook
          </NavLink>
        </Typography>)}
    </nav>
);
}

