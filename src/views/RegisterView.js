import React, { Component } from 'react';
import { connect } from 'react-redux';
import { authOperations } from '../redux/auth';
import {
  CssBaseline,
  Button,
  TextField,
  Container,
  Typography,
} from '@material-ui/core';


class RegisterView extends Component {
    state = {
        name: '',
        email: '',
        password: '',
    };

    handleChange = ({ target: { name, value } }) => {
        this.setState({ [name]: value });
    };

    handleSubmit = e => {
        e.preventDefault();

        this.props.onRegister(this.state);

        this.setState({ name: '', email: '', password: '' });
    };

    render() {
        const { name, email, password } = this.state;

        return (
            <Container maxWidth="sm">
                <CssBaseline />
               <Typography
          variant="h4"
          align="center"
          color="textPrimary"
          style={{ marginTop: '60px', marginBottom: '30px' }}
        >
          Please, add your Profile!
        </Typography>
        <form onSubmit={this.handleSubmit}>
          <TextField
            type="text"
            name="name"
            value={name}
            required
            onChange={this.handleChange}
            id="standard-basic"
            label="name"
            style={{ marginRight: '20px' }}
          />

                   <TextField
            type="tel"
            name="email"
            value={email}
            required
            onChange={this.handleChange}
            id="standard-basic"
            label="e-mail"
            style={{ marginRight: '20px' }}
          />

          <TextField
            // type="tel"
            name="password"
            value={password}
            type="password"
            title="Please, more than seven values"
            required
            onChange={this.handleChange}
            id="standard-basic"
            label="password"
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className="btnRegister"
            style={{ marginTop: '40px' }}
          >
            Submit
          </Button>
                </form>
           </Container>
        );
    }
}

const mapDispatchToProps = {
    onRegister: authOperations.register,
};

export default connect(null, mapDispatchToProps)(RegisterView);
