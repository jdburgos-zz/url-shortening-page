/** React core **/
import React from 'react';

/** Components **/
import { AuthForm } from '../../components/AuthForm';

/** Styles **/
import styles from './Login.module.scss';

export const Login = () => {
  return (
    <div className={styles.login}>
      <AuthForm title="Login" btnText="Login" />
    </div>
  );
};
