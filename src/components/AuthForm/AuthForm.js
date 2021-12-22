/** React core **/
import React, { useRef } from 'react';

/** Components **/
import { Button, Input } from '../ui';
import { Loader } from '../Loader';

/** Styles **/
import styles from './AuthForm.module.scss';

export const AuthForm = ({ title, btnText, submit, isLoading }) => {
  const inputUserRef = useRef();
  const inputPasswordRef = useRef();

  const inputUserAttrs = {
    ref: inputUserRef,
    placeholder: 'User',
    type: 'text',
  };
  const inputPasswordAttrs = {
    ref: inputPasswordRef,
    placeholder: 'Password',
    type: 'password',
  };

  const btnContent = isLoading ? <Loader /> : btnText;

  return (
    <div className={styles['auth-form']}>
      <h2 className={styles['auth-form__title']}>{title}</h2>
      <div className={styles['auth-form__container']}>
        <Input className={styles['auth-form__input']} input={inputUserAttrs} />
        <Input className={styles['auth-form__input']} input={inputPasswordAttrs} />
        <Button
          className={styles['auth-form__btn']}
          type="semi-rectangle"
          onClick={submit.bind(null, inputUserRef, inputPasswordRef)}
        >
          {btnContent}
        </Button>
      </div>
    </div>
  );
};
