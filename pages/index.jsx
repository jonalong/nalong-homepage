import { useEffect } from 'react';

import classNames from 'classnames';
import styles from '@/styles/pages/home.module.scss';

import Circle from '@/components/circle';

export default function HomePage()
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
      <div>
        <div>
          <h1 className={styles['main-text']}>
            👋 HELLO, <span className={styles['point-text']}>I’M NAON CHO</span><br/>
            AND I AM A <span className={styles['point-text']}>UX.UI DESIGNER</span><br/>
            IF YOU ARE INTERESTED IN MY WORK,<br/>
            PLEASE VISIT MY <a href="https://github.com/jonalong" target="blank" className={classNames(styles['point-text'], styles['link-text'])}>GITHUB</a> OR 
            <a href="https://daily-nalong.tistory.com/" target="blank" className={classNames(styles['point-text'], styles['link-text'])}>BLOG</a><br/>
          </h1>
        </div>
        <div>
          <ul className="work-list">
            <li>Remote medical care app</li>
            <li>interaction design</li>
            <li>svg icon set</li>
            <li>retro style mini game</li>
          </ul>
        </div>
      </div>
    </main>
  );
}