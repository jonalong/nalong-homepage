import '@/styles/reset.css';
import styles from '@/styles/app.module.scss';

import Header from '@/components/header';

export default function MyApp({ Component, pageProps })
{
  return (
    <div className={styles['container-parent']}>
      <div className={styles.container}>
        <Header />
        <Component {...pageProps} />
      </div>
    </div>
  )
}