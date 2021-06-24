import { useContext } from 'react';

import { CircleImageContext } from '@/pages/index';

import styles from '@/styles/components/circle.module.scss';

export default function Circle()
{
  const { circleImage } = useContext(CircleImageContext);
  const imageUrl = circleImage ? `url(${circleImage})` : null;

  return (
    <div className={styles["circle-box"]}>
      <div className={styles.big} style={{ backgroundImage: imageUrl }}>
        <div className={styles.small}></div>
      </div>
    </div>
  )
}