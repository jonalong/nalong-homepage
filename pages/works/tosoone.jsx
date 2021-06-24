import common from '@/styles/common.module.scss';
import styles from '@/styles/components/work-detail.module.scss';
import Head from 'next/head';

import LightBoxImage from '@/components/lightbox-image';

export default function TosoonePage()
{
  return (
    <div className={common.container}>
      <Head>
        <title>Tosoone</title>
      </Head>
      <div className={styles['work-block']}>
        <p>
          Current fairy tale books and language educational systems educate children by making them read after listening. This project, unlike the current educational system, educate children through interaction tool, which allow children to learn language faster and more entertaining way.
          <br/><br/>
          <a href="https://www.youtube.com/watch?v=MFxd776FGzg&ab_channel=%EC%A1%B0%EB%82%98%EB%A1%B1" target="blank">click here&nbsp;</a>to watch a video of my project.
          <br/><br/>
          Design Contribution : 100% <br/>
          Tool : rhino, keyshot, photoshop, illust
        </p>
        <LightBoxImage src="/tosoone/main.jpg" alt="project image" />
        <LightBoxImage src="/tosoone/process.png" alt="project image"/>
        <p>
          Please insert your card into your device.
        </p>
        <LightBoxImage src="/tosoone/tosoon1.png" alt="project image"/>
        <LightBoxImage src="/tosoone/tosoon2.png" alt="project image"/>
        <LightBoxImage src="/tosoone/01.png" alt="project image"/>
        <LightBoxImage src="/tosoone/02.png" alt="project image"/>
        <LightBoxImage src="/tosoone/03.png" alt="project image"/>
      </div>
    </div>
  )
}