/** React core **/
import React, { useState } from 'react';

/** Dependencies **/
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

/** Components **/
import { AuthForm } from 'components/AuthForm';

/** Styles **/
import styles from './SignUp.module.scss';

/** Config **/
import { auth } from 'config/firebase';

/** Actions **/
import { authActions } from 'store/auth/auth.reducer';

export default function SignUp() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = async (email, password) => {
    try {
      setIsLoading(true);

      const response = await createUserWithEmailAndPassword(
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
      setIsLoading(false);

      console.log(e.code);

      if (e.code === 'auth/invalid-email') {
        alert('invalid email');
      }

      if (e.code === 'auth/weak-password') {
        alert('weak password');
      }

      if (e.code === 'auth/email-already-in-use') {
        alert('email already in use');
      }
    }
  };

  return (
    <div className={styles['sign-up']}>
      <AuthForm title="Signup" btnText="Signup" submit={handleSubmit} isLoading={isLoading} />
    </div>
  );
}
