/** React core **/
import React, { useRef } from 'react';

/** Components **/
import { Button, Input } from '../ui';
import { Loader } from '../Loader';

/** Styles **/
import styles from './AuthForm.module.scss';

type AuthFormProps = {
  title: string;
  btnText: string;
  submit: (
    email: React.RefObject<HTMLInputElement>,
    password: React.RefObject<HTMLInputElement>,
  ) => Promise<void>;
  isLoading: boolean;
};

export const AuthForm: React.FC<AuthFormProps> = ({ title, btnText, submit, isLoading }) => {
  const inputUserRef = useRef<HTMLInputElement>(null);
  const inputPasswordRef = useRef<HTMLInputElement>(null);

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
      <div className="form">
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
