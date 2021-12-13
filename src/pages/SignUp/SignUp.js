/** React core **/
import React from 'react';

/** Components **/
import { AuthForm } from '../../components/AuthForm';

/** Styles **/
import styles from './SignUp.module.scss';

export const SignUp = () => {
  return (
    <div className={styles['sign-up']}>
      <AuthForm title="Signup" btnText="Signup" />
    </div>
  );
};
