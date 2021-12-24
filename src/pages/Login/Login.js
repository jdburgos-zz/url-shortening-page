/** React core **/
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

/** Dependencies **/
import { signInWithEmailAndPassword } from 'firebase/auth';

/** Components **/
import { AuthForm } from 'components/AuthForm';

/** Styles **/
import styles from './Login.module.scss';

/** Config **/
import { auth } from 'config/firebase';

/** Actions **/
import { authActions } from 'store/auth/auth.reducer';

export default function Login() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = async (email, password) => {
    try {
      setIsLoading(true);

      const response = await signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
      );
      const { accessToken: authToken, email: userEmail, emailVerified } = response.user;
      const user = { authToken, email: userEmail, emailVerified, isLoggedIn: true };

      setIsLoading(false);
      dispatch(authActions.setUser(user));
      localStorage.setItem('user', JSON.stringify(user));
      navigate('/admin');
    } catch (e) {
      if (e.code === 'auth/invalid-email') {
        alert('invalid email');
      }

      if (e.code === 'auth/wrong-password') {
        alert('wrong password');
      }

      if (e.code === 'auth/user-not-found') {
        alert('user not found');
      }
    }
  };

  return (
    <div className={styles.login}>
      <AuthForm title="Login" btnText="Login" submit={handleSubmit} isLoading={isLoading} />
    </div>
  );
}
