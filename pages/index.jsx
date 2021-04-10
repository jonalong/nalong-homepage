import styles from '@/styles/pages/home.module.scss';

import Header from '@/components/header';

export default function HomePage()
{
  return (
    <div className={styles['container-parent']}>
      <div className={styles.container}>
        <Header />
        <div className="circle-box">
          <div></div>
          <div></div>
        </div>
        <div>
          <div>
            <h1>
              👋 HELLO, <span>I’M NAON CHO</span><br/>
              AND I AM A <span>UX.UI DESIGNER</span><br/>
              IF YOU ARE INTERESTED IN MY WORK,<br/>
              PLEASE VISIT MY <a href="https://github.com/jonalong" target="blank">GITHUB</a> OR 
              <a href="https://daily-nalong.tistory.com/" target="blank">BLOG</a><br/>
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
      </div>
    </div>
  );
}