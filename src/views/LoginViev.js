import React, { Component } from 'react';
import { connect } from 'react-redux';
import { authOperations } from '../redux/auth';
import MyButton from '../components/Button';
import img from '../images/hand.png'
import {
  CssBaseline,
  TextField,
  Container,
  Typography,
} from '@material-ui/core';

// const styles = {
//     form: {
//         width: 320,
//     },
//     label: {
//         display: 'flex',
//         flexDirection: 'column',
//         marginBottom: 15,
//     },
// };

class LoginView extends Component {
    state = {
        email: '',
        password: '',
    };

    handleChange = ({ target: { name, value } }) => {
        this.setState({ [name]: value });
    };

    handleSubmit = e => {
        e.preventDefault();

        this.props.onLogin(this.state);

        this.setState({ name: '', email: '', password: '' });
    };

    render() {
        const { email, password } = this.state;

        return (
            <Container maxWidth="sm">
                <CssBaseline />
                {/* <h1>Страница логина</h1> */}
                 <Typography
          variant="h3"
          align="center"
          color="textPrimary"
          style={{ margin: '30px' }}
        >
          Please, sign in!
        </Typography>


                <form
                    onSubmit={this.handleSubmit}
                    style={{ display: 'flex', justifyContent: 'space-between' }}
                    autoComplete="off"
                >
                   <TextField
            id="standard-basic"
            label="e-mail"
            className="phonebook-input"
            // type="tel"
            name="email"
            value={email}
            placeholder="e-mail"
            required
            onChange={this.handleChange}
            style={{ marginRight: '20px' }}
          />

                    <TextField
            id="standard-basic"
            label="password"
            className="phonebook-input"
            // type="tel"
            name="password"
            value={password}
            placeholder="password"
            type="password"
            title="Please, more than seven values"
            required
            onChange={this.handleChange}
          />
                    <MyButton
            title={'Submit'}
            style={{ display: 'flex', marginTop: '10px' }}
          />

                    {/* <button type="submit">Войти</button> */}
                </form>
                <img alt="img" src={img} width="680px" style = {{  marginTop: '60px' }}></img>
            </Container>
        );
    }
}

const mapDispatchToProps = {
    onLogin: authOperations.logIn,
};

export default connect(null, mapDispatchToProps)(LoginView);