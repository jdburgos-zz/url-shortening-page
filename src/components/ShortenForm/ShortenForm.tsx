/** React core **/
import React, { useRef, useState } from 'react';

/** Components **/
import { Button, Input } from '../ui';
import { Loader } from '../Loader';

/** Actions **/
import { setLinks } from '../../store/shorten-links/shorten-links.reducer';

/** Hooks **/
import { useAppDispatch } from '../../hooks/react-redux';

/** Styles **/
import styles from './ShortenForm.module.scss';

export const ShortenForm = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorText, setErrorText] = useState('');
  const dispatch = useAppDispatch();

  const api = async (link: string) => {
    try {
      setIsLoading(true);

      const response = await fetch(`https://api.shrtco.de/v2/shorten?url=${link}`);
      const data = await response.json();

      setIsLoading(false);

      const { result } = data;
      const { original_link: originalLink, full_short_link: fullShortLink } = result;
      const newLink = { url: originalLink, shortenLink: fullShortLink };
      const links = localStorage.getItem('shortenLinks');

      if (!links) {
        localStorage.setItem('shortenLinks', JSON.stringify([newLink]));
        dispatch(setLinks([newLink]));
      } else {
        const items = JSON.parse(links);

        items.push(newLink);
        localStorage.setItem('shortenLinks', JSON.stringify(items));
        dispatch(setLinks(items));
      }
    } catch (e) {
      setError(true);
      setErrorText('Please add a valid link');
    }
  };

  const makeRequest = () => {
    setError(!inputRef.current!.value);

    if (!inputRef.current!.value) {
      setErrorText('Please add a link');

      return;
    }

    api(inputRef.current!.value);
  };

  const handleClick = () => {
    makeRequest();
  };

  const handleKeyUp = ({ code }: React.KeyboardEvent) => {
    if (code !== 'Enter') return;

    makeRequest();
  };

  const errorClass = error ? `${styles['shorten-form__input-error']}` : '';
  const classes = `${styles['shorten-form__input']} ${errorClass}`.trim();
  const errorElement = <span className={styles['shorten-form__input-text']}>{errorText}</span>;
  const btnContent = isLoading ? <Loader /> : 'Shorten It!';
  const inputAttrs = {
    ref: inputRef,
    placeholder: 'Shorten a link here...',
    type: 'url',
    onKeyUp: handleKeyUp,
  };

  return (
    <div
      className="form"
      style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/bg-shorten-mobile.svg)` }}
    >
      <Input className={classes} input={inputAttrs} />
      {error && errorElement}
      <Button type="semi-rectangle" disabled={isLoading} onClick={handleClick}>
        {btnContent}
      </Button>
    </div>
  );
};
