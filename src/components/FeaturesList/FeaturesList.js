/** React core **/
import React from 'react';

/** Card **/
import { Card } from '../ui/Card';

/** Styles **/
import styles from './FeaturesList.module.scss';

const FEATURES = [
  {
    title: 'Brand Recognition',
    description:
      'Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.',
    img: '',
  },
  {
    title: 'Detailed Records',
    description:
      'Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.',
    img: '',
  },
  {
    title: 'Fully Customizable',
    description:
      'Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.',
    img: '',
  },
];

const content = FEATURES.map(({ title, description, img }, index) => (
  <Card key={index}>
    <img src="" alt="" />
    <h4>{title}</h4>
    <p>{description}</p>
  </Card>
));

export const FeaturesList = () => <div className={styles['features-list']}>{content}</div>;
