import { useContext } from 'react';

import { CircleTextStateContext } from '@/pages/_app';

import styles from '@/styles/components/circle.module.scss';

export default function Circle()
{
  const circleTextState = useContext(CircleTextStateContext);
  const imageUrl = circleTextState ? `url(${circleTextState})` : null;

  return (
    <div className={styles["circle-box"]}>
      <div className={styles.big} style={{ backgroundImage: imageUrl }}>
        <div className={styles.small}></div>
      </div>
    </div>
  )
}