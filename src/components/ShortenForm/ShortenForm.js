/** React core **/
import React from 'react';

/** Components **/
import { Input } from '../ui/Input';
import { Button } from '../ui/Button';

/** Styles **/
import styles from './ShortenForm.module.scss';

export const ShortenForm = () => (
  <div
    className={styles['shorten-form']}
    style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/bg-shorten-mobile.svg)` }}
  >
    <Input
      className={styles['shorten-form__input']}
      input={{
        placeholder: 'Shorten a link here...',
      }}
    />
    <Button type="semi-rectangle">Shorten It!</Button>
  </div>
);
