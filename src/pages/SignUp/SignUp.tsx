/** React core **/
import React, { useState } from 'react';

/** Dependencies **/
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

/** Components **/
import { AuthForm } from '../../components/AuthForm';

/** Config **/
import { auth } from '../../config/firebase';

/** Actions **/
import { setUser } from '../../store/auth/auth.reducer';

/** Hooks **/
import { useAppDispatch } from '../../hooks/react-redux';

/** Utils **/
import { isFirebaseError } from '../../utils/type-guards/is-firebase-error.type-guard';

/** Interfaces **/
import { IUser } from '../../interfaces/user.interface';

/** Styles **/
import styles from './SignUp.module.scss';

export default function SignUp() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useAppDispatch();

  const handleSubmit = async (
    email: React.RefObject<HTMLInputElement>,
    password: React.RefObject<HTMLInputElement>,
  ) => {
    try {
      setIsLoading(true);

      const response = await createUserWithEmailAndPassword(
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

        if (e.code === 'auth/weak-password') {
          alert('weak password');
        }

        if (e.code === 'auth/email-already-in-use') {
          alert('email already in use');
        }
      }
    }
  };

  return (
    <div className={styles['sign-up']}>
      <AuthForm title="Signup" btnText="Signup" submit={handleSubmit} isLoading={isLoading} />
    </div>
  );
}
