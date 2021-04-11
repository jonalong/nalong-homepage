import styles from '@/styles/components/header.module.scss';

export default function Header()
{
  return (
    <header className={styles.header}>
      <h1>
        <img src="/logo.svg" alt="logo" className={styles.logo} width="50px" />
      </h1>
      <nav>
        <ul className={styles.nav}>
          <li>HOME</li>
          <li>WORK</li>
        </ul>
      </nav>
    </header>
  );
}