/** React core **/
import React, { useRef, useState } from 'react';

/** Components **/
import { Button, Input } from '../ui';
import { Loader } from '../Loader';

/** Styles **/
import styles from './ShortenForm.module.scss';

export const ShortenForm = () => {
  const inputRef = useRef();
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorText, setErrorText] = useState('');

  const api = async link => {
    try {
      setIsLoading(true);

      const response = await fetch(`https://api.shrtco.de/v2/shorten?url=${link}`);
      const data = await response.json();

      setIsLoading(false);

      const { result } = data;
      const { original_link, full_short_link } = result;
      const newLink = { url: original_link, shortenLink: full_short_link };
      const links = localStorage.getItem('shortenLinks');

      if (!links) {
        localStorage.setItem('shortenLinks', JSON.stringify([newLink]));
      } else {
        const items = JSON.parse(links);

        items.push(newLink);
        localStorage.setItem('shortenLinks', JSON.stringify(items));
      }
    } catch (e) {
      setError(true);
      setErrorText('Please add a valid link');
    }
  };

  const makeRequest = () => {
    setError(!inputRef.current.value);

    if (!inputRef.current.value) {
      setErrorText('Please add a link');

      return;
    }

    api(inputRef.current.value);
  };

  const handleClick = () => {
    makeRequest();
  };

  const handleKeyUp = ({ code }) => {
    if (code !== 'Enter') return;

    makeRequest();
  };

  const errorClass = error ? `${styles['shorten-form__input-error']}` : '';
  const classes = `${styles['shorten-form__input']} ${errorClass}`.trim();
  const errorElement = <span className={styles['shorten-form__input-text']}>{errorText}</span>;
  const btnContent = isLoading ? <Loader /> : 'Shorten It!';

  return (
    <div
      className={styles['shorten-form']}
      style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/bg-shorten-mobile.svg)` }}
    >
      <Input
        className={classes}
        input={{
          ref: inputRef,
          placeholder: 'Shorten a link here...',
          type: 'url',
          onKeyUp: handleKeyUp,
        }}
      />
      {error && errorElement}
      <Button type="semi-rectangle" disabled={isLoading} onClick={handleClick}>
        {btnContent}
      </Button>
    </div>
  );
};
