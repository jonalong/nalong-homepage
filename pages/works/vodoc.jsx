import { useState } from 'react';

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
    <div className={styles['work-password']}>
      <h1>
        this project is privite project<br/>
        please enter password
      </h1>
      <div className={styles['work-text']}>원격진료 시스템 VOIDOC의 브랜딩과 사용자 어플리케이션, 관리자, 의사 웹 디자인</div>
      <form method="POST" onSubmit={handleSubmit}>
        <input name="password" type="password" placeholder="enter password" />
      </form>

      {show && <Voidoc />}
    </div>
  )
}