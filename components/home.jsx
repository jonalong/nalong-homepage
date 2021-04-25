import classNames from 'classnames';
import styles from '@/styles/components/home.module.scss';

import CircleText from '@/components/circle-text';

export default function Home()
{
  return (
    <div>
      <h1 className={styles['main-text']}>
        👋 HELLO, 
        <CircleText className={styles['point-text']} image="/images/nalong.jpg" href="https://www.instagram.com/jjo_nalong/" target="_blank">
        &nbsp;I’M NAON CHO
        </CircleText><br/>
        AND I AM A 
        {' '}<CircleText className={styles['point-text']} image="/images/designer.jpg">UX.UI DESIGNER</CircleText><br/>
        IF YOU ARE INTERESTED IN MY WORK,<br/>
        PLEASE VISIT MY 
        {' '}<CircleText className={styles['point-text']} image="/images/github.jpg" href="https://github.com/jonalong" target="_blank">GITHUB</CircleText>
        {' OR '} 
        <CircleText className={styles['point-text']} image="/images/blog.png" href="https://daily-nalong.tistory.com/" target="_blank">BLOG</CircleText><br/>
      </h1>
    </div>
  );
}