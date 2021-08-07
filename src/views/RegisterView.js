import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../redux/auth';
import {
  CssBaseline,
  Button,
  TextField,
  Container,
  Typography,
} from '@material-ui/core';

// const mapDispatchToProps = {
//     onRegister: authOperations.register,
// };

// export default connect(null, mapDispatchToProps)(RegisterView);



export default function RegisterView() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
    // state = {
    //     name: '',
    //     email: '',
    //     password: '',
    // };

    const handleChange = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);

      default:
    }
  };

    const handleSubmit = e => {
        e.preventDefault();

         dispatch(authOperations.register({ name, email, password }));

    setName('');
    setEmail('');
    setPassword('');
    };

   
        // const { name, email, password } = this.state;

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
        <form onSubmit={handleSubmit}>
          <TextField
            type="text"
            name="name"
            value={name}
            required
            onChange={handleChange}
            id="standard-basic"
            label="name"
            style={{ marginRight: '20px' }}
          />

                   <TextField
            type="tel"
            name="email"
            value={email}
            required
            onChange={handleChange}
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
            onChange={handleChange}
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

