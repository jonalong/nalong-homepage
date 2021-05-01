import common from '@/styles/common.module.scss';
import styles from '@/styles/components/work-detail.module.scss';
import Head from 'next/head';

export default function TosoonePage()
{
  return (
    <div className={common.container}>
      <Head>
        <title>Fitscle</title>
      </Head>
      <div className={styles['work-block']}>
        <p>
          fitness service brand identity design and app ui design.
          <br/><br/>
          <a href="/fitscle/FITSCLE BI_Guideline.pdf" target="blank">click here&nbsp;</a>to watch a PDF of my project.
        </p>
        <img src="/fitscle/fitscle01.jpg" alt="project image"/>
        <img src="/fitscle/fitscle02.png" alt="project image"/>
        <img src="/fitscle/fitscle03.png" alt="project image"/>
        <img src="/fitscle/fitscle04.png" alt="project image"/>
      </div>
    </div>
  )
}