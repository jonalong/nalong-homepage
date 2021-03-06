import React, { useState, useEffect } from 'react';
import Head from 'next/head';

import { useRouter } from 'next/router';

import classNames from 'classnames';
import common from '@/styles/common.module.scss';
import styles from '@/styles/pages/main.module.scss';

import Circle from '@/components/circle';
import Page from '@/components/page';
import Home from '@/components/home';
import Work from '@/components/work';

export const CircleImageContext = React.createContext();

//스크롤 스크립트
const LIMIT_DELTA = 15;

export default function MainPage()
{
  const [circleImage, setCircleImage] = useState(null)

  const router = useRouter();

  const hashes = ['', '#works', '#thanks'];
  const pages = [<Home />, <Work />, <div>thank you for wathing my website! </div>]

  const [moving, setMoving] = useState(false);
  const [activePage, setActivePage] = useState(0);

  useEffect(() =>
  {
    const handleHashChanged = (url) =>
    {
      const matchedResult = url.match(/^\/(#\w+|)$/);
      if (!matchedResult)
      {
        return;
      }
      
      const activePageIndex = hashes.indexOf(matchedResult[1]);
      if (activePageIndex < 0 || activePageIndex == activePage)
      {
        return;
      }

      setActivePage(activePageIndex);
      setTimeout(() => setMoving(false), styles.movingMs);
    };
    handleHashChanged(router.asPath);

    router.events.on('hashChangeStart', handleHashChanged);
    return () =>
    {
      router.events.off('hashChangeStart', handleHashChanged);
    };
  });

  const handleScrollEvent = (e) =>
  {
    if (moving)
    {
      return;
    }
    
    if (Math.abs(e.deltaY) > LIMIT_DELTA)
    {
      let nextPage = -1;
      if (e.deltaY < 0)
      {
        // UP
        if (activePage === 0)
        {
          return 0;
        }
        nextPage = activePage - 1;
      }
      else
      {
        // DOWN
        if (activePage === pages.length - 1)
        {
          return;
        }
        nextPage = activePage + 1;
      }

      setMoving(true);
      const hash = hashes[nextPage];
      const nextUri = hash;
      router.replace(nextUri);
    }
  }

  //html
  return (
    <div className={classNames(common.container, common.full)}>
      <Head>
        <title>Nalong studio</title>
      </Head>
      <main className={styles.main}>
        <CircleImageContext.Provider value={{circleImage, setCircleImage}}>
          <Circle />
          <div className={styles.pages} onWheel={handleScrollEvent}>
            {pages.map((page, i) =>
              <Page key={i} style={{ top: (i - activePage) * styles.height }}>
                {page}
              </Page>  
            )}
          </div>
        </CircleImageContext.Provider>
      </main>
    </div>
  );
}