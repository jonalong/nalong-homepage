import { useState } from 'react';
import Head from 'next/head';

import common from '@/styles/common.module.scss';
import styles from '@/styles/pages/work-password.module.scss';

import { password } from '@/.private.json';

import VoiceEnr from '@/components/private/voiceenr';

export default function VoiceenrPage()
{
  const [show, setShow] = useState(false);

  const handleSubmit = (e) =>
  {
    e.preventDefault();

    if (e.target.password.value === password)
    {
      setShow(true);
    }
    else
    {
      alert('비밀번호를 다시 입력해주세요 :(');
    }
  };

  return (
    <div className={common.container}>
      <Head>
        <title>VoiceENR</title>
      </Head>
      <div className={styles['work-password']}>
        <h1>
          this project is private project<br/>
          please enter password
        </h1>
        <div className={styles['work-text']}>
          Please find the password within my resume.<br/>
          if you want to show my work, mail me <a href="mailto:jjo-nalong@gmail.com">jjo-nalong@gmail.com</a>
          <br/><br/>
          Design Contribution : 100%<br/>
          Tool : figma, illust, photoshop, google forms
        </div>
        <form method="POST" onSubmit={handleSubmit}>
          <input name="password" type="password" placeholder="enter password" />
        </form>
        {show && <VoiceEnr />}
      </div>
    </div>
  )
}