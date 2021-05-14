import { useState } from 'react';
import Head from 'next/head';

import common from '@/styles/common.module.scss';
import styles from '@/styles/pages/work-password.module.scss';

import { password } from '@/.private.json';

import Voidoc from '@/components/private/voidoc';

export default function VoidocPage()
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
        <title>Voidoc</title>
      </Head>
      <div className={styles['work-password']}>
        <h1>
          this project is private project<br/>
          please enter password
        </h1>
        <div className={styles['work-text']}>
          Please find the password within my resume.<br/>
          if you want to see my work, mail me <a href="mailto:jjo-nalong@gmail.com">jjo-nalong@gmail.com</a>
          <br/><br/>
          Design Contribution : 100%<br/>
          Tool : adobe XD, Zeplin, photoshop, illust
        </div>
        <form method="POST" onSubmit={handleSubmit}>
          <input name="password" type="password" placeholder="enter password" />
        </form>

        {show && <Voidoc />}
      </div>
    </div>
  )
}