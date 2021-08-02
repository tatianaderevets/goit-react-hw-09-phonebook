import React from 'react';
import { connect } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';
import defaultAvatar from './love_red.png';

import { CssBaseline, Button } from '@material-ui/core';
import LockOpenIcon from '@material-ui/icons/LockOpen';


const styles = {
    container: {
        display: 'flex',
        alignItems: 'center',
    },
    avatar: {
        marginRight: 4,
    },
    name: {
        fontWeight: 700,
        marginRight: 12,
    },
};

const UserMenu = ({ avatar, name, onLogout }) => (
    <div style={styles.container}>
        <CssBaseline />
        <img src={avatar} alt="" width="32" style={styles.avatar} />
        <span style={styles.name}>Welcome, {name}</span>
        <Button type="button" onClick={onLogout}>
        <LockOpenIcon fontSize="large" style={{ color: 'white' }} />
      </Button>
    </div>
);
const mapStateToProps = state => ({
    name: authSelectors.getUsername(state),
    avatar: defaultAvatar,
});

const mapDispatchToProps = {
    onLogout: authOperations.logOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
