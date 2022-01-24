/** React core **/
import React, { useState } from 'react';

/** Components **/
import { Button, Card } from '../ui';

/** Interfaces **/
import { IShortenLink } from '../../interfaces/shorten-link.interface';

/** Styles **/
import styles from './ShortenLink.module.scss';

type ShortenLinkProps = {
  link: IShortenLink;
};

export const ShortenLink: React.FC<ShortenLinkProps> = ({ link }) => {
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
        <span className={styles['shorten-link__link']}>{url}</span>
      </div>
      <div className={styles['shorten-link__content']}>
        <span className={styles['shorten-link__text']}>
          <span className={styles['shorten-link__link']}>{shortenLink}</span>
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
