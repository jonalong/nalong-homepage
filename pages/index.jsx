import { useState } from 'react';

import styles from '@/styles/pages/main.module.scss';

import Circle from '@/components/circle';
import Page from '@/components/page';
import Home from '@/components/home';
import Work from '@/components/work';


//스크롤 스크립트
const LIMIT_DELTA = 15;

export default function MainPage()
{
  const pages = [<Home />, <Work />, <div>안뇽</div>]

  const [state, setState] = useState({
    moving: false,
    activePage: 0
  });

  const handleScrollEvent = (e) =>
  {
    if (state.moving)
    {
      return;
    }
    
    if (Math.abs(e.deltaY) > LIMIT_DELTA)
    {
      if (e.deltaY < 0)
      {
        if (state.activePage === 0)
        {
          return;
        }
        setState({
          moving: true,
          activePage: state.activePage - 1
        });
        setTimeout(() => setState({
          moving: false,
          activePage: state.activePage - 1
        }), styles.movingMs);
      }
      else
      {
        if (state.activePage === pages.length - 1)
        {
          return;
        }
        setState({
          moving: true,
          activePage: state.activePage + 1
        });
        setTimeout(() => setState({
          moving: false,
          activePage: state.activePage + 1
        }), styles.movingMs);
      }
    }
  }

  //html
  return (
    <main>
      <Circle />
      <div className={styles.pages} onWheel={handleScrollEvent}>
        {pages.map((page, i) =>
          <Page key={i} style={{ top: (i - state.activePage) * styles.height }}>
            {page}
          </Page>  
        )}
      </div>
    </main>
  );
}