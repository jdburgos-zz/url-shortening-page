/** React core **/
import React from 'react';

/** Components **/
import { Input } from '../ui/Input';
import { Button } from '../ui/Button';

/** Styles **/
import styles from './ShortenForm.module.scss';

export const ShortenForm = () => (
  <div className={styles}>
    <Input
      input={{
        placeholder: 'Shorten a link here...',
      }}
    />
    <Button type="semiRectangle">Shorten It!</Button>
  </div>
);
