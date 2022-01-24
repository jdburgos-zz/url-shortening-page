/** React core **/
import React, { useState } from 'react';

/** Dependencies **/
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

/** Components **/
import { AuthForm } from '../../components/AuthForm';

/** Config **/
import { auth } from '../../config/firebase';

/** Actions **/
import { useAppDispatch } from '../../hooks/react-redux';

/** Hooks **/
import { setUser } from '../../store/auth/auth.reducer';

/** Interfaces **/
import { IUser } from '../../interfaces/user.interface';

/** Utils **/
import { isFirebaseError } from '../../utils/type-guards/is-firebase-error.type-guard';

/** Styles **/
import styles from './Login.module.scss';

export default function Login() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useAppDispatch();

  const handleSubmit = async (
    email: React.RefObject<HTMLInputElement>,
    password: React.RefObject<HTMLInputElement>,
  ): Promise<void> => {
    try {
      setIsLoading(true);

      const response = await signInWithEmailAndPassword(
        auth,
        email.current!.value,
        password.current!.value,
      );
      const { refreshToken: authToken, email: userEmail, emailVerified } = response.user;
      const user = { authToken, email: userEmail, emailVerified, isLoggedIn: true } as IUser;

      setIsLoading(false);
      dispatch(setUser(user));
      localStorage.setItem('user', JSON.stringify(user));
      navigate('/admin');
    } catch (e) {
      setIsLoading(false);

      if (isFirebaseError(e)) {
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
    }
  };

  return (
    <div className={styles.login}>
      <AuthForm title="Login" btnText="Login" submit={handleSubmit} isLoading={isLoading} />
    </div>
  );
}
