import styles from '@/styles/pages/workspage.module.scss';

export default function VoidocPage()
{
  return (
    <div className={styles['work-page']}>
      <h1>
        this project is privite project<br/>
        please enter password
      </h1>
      <div className={styles['work-text']}>원격진료 시스템 VOIDOC의 브랜딩과 사용자 어플리케이션, 관리자, 의사 웹 디자인</div>
      <input type="password" placeholder="enter password" />
    </div>
  )
}