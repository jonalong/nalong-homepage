import { useEffect } from 'react';

import styles from '@/styles/pages/main.module.scss';

import Circle from '@/components/circle';
import Home from '@/components/home';
import Work from '@/components/work';

export default function MainPage()
{
  const handleScrollEvent = (e) =>
  {
    console.log(e)
  }

  useEffect(() =>
  {
    document.addEventListener('wheel', handleScrollEvent, false);

    return () =>
    {
      document.removeEventListener('wheel', handleScrollEvent);
    }
  });

  return (
    <main>
      <Circle />
      <div className={styles.pages}>
        <Home />
        <Work />
      </div>
    </main>
  );
}