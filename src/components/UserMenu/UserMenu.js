import React, {useCallback} from 'react';
import { useSelector, useDispatch } from 'react-redux';
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

// const mapStateToProps = state => ({
//     name: authSelectors.getUsername(state),
//     avatar: defaultAvatar,
// });

// const mapDispatchToProps = {
//     onLogout: authOperations.logOut,
// };

//  connect(mapStateToProps, mapDispatchToProps)(UserMenu);


export default function UserMenu() {
    const dispatch = useDispatch();
    const name = useSelector(authSelectors.getUsername);
    const onLogOut = useCallback(() => {
        dispatch(authOperations.logOut());
    }, [dispatch]);

    return (
    <div style={styles.container}>
        <CssBaseline />
        <img src={defaultAvatar} alt="" width="32" style={styles.avatar} />
        <span style={styles.name}>Welcome, {name}</span>
        <Button type="button" onClick={onLogOut}>
        <LockOpenIcon fontSize="large" style={{ color: 'white' }} />
      </Button>
    </div>
    );
}
