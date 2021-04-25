import { useState } from 'react';

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
      <div className={styles['work-password']}>
        <h1>
          this project is privite project<br/>
          please enter password
        </h1>
        <div className={styles['work-text']}>Remote medical care project VOIDOC branding and ux.ui design</div>
        <form method="POST" onSubmit={handleSubmit}>
          <input name="password" type="password" placeholder="enter password" />
        </form>

        {show && <Voidoc />}
      </div>
    </div>
  )
}