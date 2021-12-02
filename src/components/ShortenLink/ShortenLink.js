/** React core **/
import React, { useState } from 'react';

/** Components **/
import { Button, Card } from '../ui';

/** Styles **/
import styles from './ShortenLink.module.scss';

export const ShortenLink = ({ link }) => {
  const [text, setText] = useState('Copy');
  const [variant, setVariant] = useState('primary');

  const handleClick = () => {
    navigator.clipboard.writeText(link.shortenLink);
    setText('Copied!');
    setVariant('secondary');
  };

  return (
    <Card className={styles['shorten-link']}>
      <div className={styles['shorten-link__header']}>
        <a
          href={link.url}
          target="_blank"
          rel="noreferrer"
          className={styles['shorten-link__link']}
        >
          {link.url}
        </a>
      </div>
      <div className={styles['shorten-link__content']}>
        <span className={styles['shorten-link__text']}>
          <a
            href={link.shortenLink}
            target="_blank"
            rel="noreferrer"
            className={styles['shorten-link__link']}
          >
            {link.shortenLink}
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
