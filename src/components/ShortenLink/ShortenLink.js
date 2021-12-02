/** React core **/
import React, { useState } from 'react';

/** Components **/
import { Button, Card } from '../ui';

/** Styles **/
import styles from './ShortenLink.module.scss';

export const ShortenLink = ({ link }) => {
  const [text, setText] = useState('Copy');
  const [variant, setVariant] = useState('primary');
  const { url, shortenLink } = link;

  const handleClick = () => {
    navigator.clipboard.writeText(shortenLink);
    setText('Copied!');
    setVariant('secondary');
  };

  return (
    <Card className={styles['shorten-link']}>
      <div className={styles['shorten-link__header']}>
        <a href={url} target="_blank" rel="noreferrer" className={styles['shorten-link__link']}>
          {url}
        </a>
      </div>
      <div className={styles['shorten-link__content']}>
        <span className={styles['shorten-link__text']}>
          <a
            href={shortenLink}
            target="_blank"
            rel="noreferrer"
            className={styles['shorten-link__link']}
          >
            {shortenLink}
          </a>
        </span>
        <Button
          type="semi-rectangle"
          variant={variant}
          className={styles['shorten-link__btn']}
          onClick={handleClick}
        >
          {text}
        </Button>
      </div>
    </Card>
  );
};