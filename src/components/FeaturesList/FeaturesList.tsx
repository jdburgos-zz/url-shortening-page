/** Card **/
import { Card } from '../ui';

/** Styles **/
import styles from './FeaturesList.module.scss';

const FEATURES = [
  {
    title: 'Brand Recognition',
    description:
      'Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.',
    img: `${process.env.PUBLIC_URL}/images/icon-brand-recognition.svg`,
  },
  {
    title: 'Detailed Records',
    description:
      'Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.',
    img: `${process.env.PUBLIC_URL}/images/icon-detailed-records.svg`,
  },
  {
    title: 'Fully Customizable',
    description:
      'Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.',
    img: `${process.env.PUBLIC_URL}/images/icon-fully-customizable.svg`,
  },
];

const content = FEATURES.map(({ title, description, img }, index) => (
  <Card key={index} className={styles['features-list__card']}>
    <div className={styles['features-list__img-container']}>
      <img className={styles['features-list__img']} src={img} alt={title} />
    </div>
    <h4 className={styles['features-list__title']}>{title}</h4>
    <p className={styles['features-list__description']}>{description}</p>
  </Card>
));

export const FeaturesList = () => <div className={styles['features-list']}>{content}</div>;
