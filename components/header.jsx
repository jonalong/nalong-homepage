import Link from 'next/link';

import styles from '@/styles/components/header.module.scss';

export default function Header()
{
  return (
    <header className={styles.header}>
      {/* <h1>
        <img src="/logo.svg" alt="logo" className={styles.logo} width="50px" />
      </h1> */}
      <nav>
        <ul className={styles.nav}>
          <li>
            <Link href="/" replace={true} shallow={true}>
              <a>HOME</a>
            </Link>
          </li>
          <li>
            <Link href="/#works" replace={true} shallow={true}>
              <a>WORK</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}