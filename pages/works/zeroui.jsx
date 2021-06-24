import common from '@/styles/common.module.scss';
import styles from '@/styles/components/work-detail.module.scss';
import Head from 'next/head';

import LightBoxImage from '@/components/lightbox-image';

export default function ZerouiPage()
{
  return (
    <div className={common.container}>
      <Head>
        <title>ZeroUi</title>
      </Head>
      <div className={styles['work-block']}>
        <p>
          Team Zerohouse created and distributed a set of non-copyrighted icons. If you want to use it, please visit the Zero House GitHub.
          <br/><br/>
          <a href="https://github.com/Team-ZeroHouse/zerohouse-icons" target="blank">click here&nbsp;</a>to go to the project.
          <br/><br/>
          Design Contribution : 100%<br/>
          Tool : figma, illust, photoshop, drawing
        </p>
        <LightBoxImage src="/zeroui/zeroui.png" alt="project image" />
      </div>
    </div>
  )
}