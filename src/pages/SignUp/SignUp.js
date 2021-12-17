/** React core **/
import React from 'react';

/** Dependencies **/
import { createUserWithEmailAndPassword } from 'firebase/auth';

/** Components **/
import { AuthForm } from '../../components/AuthForm';

/** Styles **/
import styles from './SignUp.module.scss';

/** Config **/
import { auth } from '../../config/firebase';

export const SignUp = () => {
  const handleSubmit = async (email, password) => {
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
      );
      console.log(response);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className={styles['sign-up']}>
      <AuthForm title="Signup" btnText="Signup" submit={handleSubmit} />
    </div>
  );
};
