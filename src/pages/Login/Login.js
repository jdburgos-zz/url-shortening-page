/** React core **/
import React from 'react';
import { useNavigate } from 'react-router-dom';

/** Dependencies **/
import { signInWithEmailAndPassword } from 'firebase/auth';

/** Components **/
import { AuthForm } from '../../components/AuthForm';

/** Styles **/
import styles from './Login.module.scss';

/** Config **/
import { auth } from '../../config/firebase';

export default function Login() {
  const navigate = useNavigate();

  const handleSubmit = async (email, password) => {
    try {
      const response = await signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
      );
      const { accessToken, email: userEmail, emailVerified } = response.user;

      if (!emailVerified) {
        console.log('you have to verify your email!');
        return;
      }

      localStorage.setItem('authToken', accessToken);
      console.log('user logged', userEmail);
      navigate('/admin');
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className={styles.login}>
      <AuthForm title="Login" btnText="Login" submit={handleSubmit} />
    </div>
  );
}
