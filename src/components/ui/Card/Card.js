/** React core **/
import React from 'react';

/** Styles **/
import styles from './Card.module.scss';

export const Card = props => <div className={styles}>{props.children}</div>;
