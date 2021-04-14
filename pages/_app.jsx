import React, { useReducer } from 'react';

import '@/styles/reset.css';
import '@/styles/global.scss';

import styles from '@/styles/app.module.scss';

import Header from '@/components/header';

export const CircleTextStateContext = React.createContext();
export const CircltTextDispatchContext = React.createContext();

function circleTextReducer(state, action)
{
  switch (action.type)
  {
    case 'SET':
      return action.payload;
    case 'UNSET':
      return null;
    default:
      throw new Error('에러얌');
  }
}

export default function MyApp({ Component, pageProps })
{
  const [circleTextState, circleTextDispatch] = useReducer(circleTextReducer, null);

  return (
    <CircleTextStateContext.Provider value={circleTextState}>
      <CircltTextDispatchContext.Provider value={circleTextDispatch}>
        <div className={styles['container-parent']}>
          <div className={styles.container}>
            <Header />
            <Component {...pageProps} />
          </div>
        </div>
      </CircltTextDispatchContext.Provider>
    </CircleTextStateContext.Provider>
  )
}