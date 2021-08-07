import React, { Suspense, lazy, useEffect } from 'react';
import { Switch} from 'react-router-dom';
import AppBar from './components/AppBar';
import { authOperations } from './redux/auth'
import {useDispatch} from 'react-redux';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';

const HomeView = lazy(() => import('./views/HomeView'));
const RegisterView = lazy(() => import('./views/RegisterView'));
const LoginView = lazy(() => import('./views/LoginViev'));
const ContactsView = lazy(() => import('./views/ContactsView'));





export default function App() {
  const dispatch = useDispatch();
    // componentDidMount() {
    //   this.props.onGetCurretnUser();
    // }
    useEffect(() => {
      console.log("useEffect заменяющий componentDidMount");
      dispatch(authOperations.getCurrentUser());
    }, [dispatch] );

    
      return (
        <>
          <AppBar />
          <Suspense fallback={<p>Loading...</p>}>
            <Switch>
              <PublicRoute exact path="/" >
                <HomeView/>
              </PublicRoute>

              <PublicRoute
                path="/register"
                restricted
                redirectTo="/contacts">
                <RegisterView/>
              </PublicRoute>
              
              <PublicRoute
                path="/login"
                restricted
                redirectTo="/contacts">
                <LoginView/>
              </PublicRoute>
              
              <PrivateRoute
                path="/contacts"
                redirectTo="/login" >
                <ContactsView />
              </PrivateRoute>

            </Switch>
          </Suspense>
        </>
      );
    }
  

