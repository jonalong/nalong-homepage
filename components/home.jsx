import classNames from 'classnames';
import styles from '@/styles/components/home.module.scss';

import CircleText from '@/components/circle-text';

export default function Home()
{
  return (
    <div>
      <h1 className={styles['main-text']}>
        👋 HELLO, <CircleText className={styles['point-text']} image="/images/nalong.jpg">I’M NAON CHO</CircleText><br/>
        AND I AM A <span className={styles['point-text']}>UX.UI DESIGNER</span><br/>
        IF YOU ARE INTERESTED IN MY WORK,<br/>
        PLEASE VISIT MY <a href="https://github.com/jonalong" target="blank" className={classNames(styles['point-text'], styles['link-text'])}>GITHUB</a>
        {' OR '} 
        <a href="https://daily-nalong.tistory.com/" target="blank" className={classNames(styles['point-text'], styles['link-text'])}>BLOG</a><br/>
      </h1>
    </div>
  );
}