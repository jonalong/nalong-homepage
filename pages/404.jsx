import common from '@/styles/common.module.scss';
import Head from 'next/head';

export default function NotFound()
{
  return (
    <div className={common.container}>
      <Head>
        <title>404 Error</title>
      </Head>
      <main>없는 페이지에용</main>
    </div>
  )
}