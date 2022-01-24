/** React core **/
import { useEffect, useState } from 'react';

/** Components **/
import { ButtonLink } from '../../components/ui';
import { ShortenForm } from '../../components/ShortenForm';
import { ShortenLinks } from '../../components/ShortenLinks';
import { FeaturesList } from '../../components/FeaturesList';

/** Actions **/
import { setLinks } from '../../store/shorten-links/shorten-links.reducer';

/** Hooks **/
import { useAppDispatch, useAppSelector } from '../../hooks/react-redux';

/** Styles **/
import styles from './Home.module.scss';

export default function Home() {
  const dispatch = useAppDispatch();
  const [hasLinks, setHasLinks] = useState(false);
  const links = useAppSelector(state => state.shortenLinks.links);

  useEffect(() => {
    const checkData = () => {
      setHasLinks(links && !!links.length);
      dispatch(setLinks(links));
    };

    checkData();
  }, [dispatch, links]);

  return (
    <div className={styles.home}>
      <img
        className={styles.home__image}
        src={`${process.env.PUBLIC_URL}/images/illustration-working.svg`}
        alt="working"
      />
      <div className={styles['get-started']}>
        <h2 className={styles['get-started__title']}>More than just shorter links</h2>
        <p className={styles['get-started__description']}>
          Build test text in app your brand’s recognition and get detailed insights on how your
          links are performing.
        </p>
        <ButtonLink to="/features" className={styles['get-started__btn']}>
          Get Started
        </ButtonLink>
      </div>
      <ShortenForm />
      <div className={styles['secondary-content']}>
        {hasLinks && <ShortenLinks links={links} />}
        <div className={styles['advanced-statistics']}>
          <h3 className={styles['advanced-statistics__title']}>Advanced Statistics</h3>
          <p className={styles['advanced-statistics__description']}>
            Track how your links are performing across the web with our advanced statistics
            dashboard.
          </p>
        </div>
        <FeaturesList />
      </div>
    </div>
  );
}
