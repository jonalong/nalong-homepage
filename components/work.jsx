import styles from '@/styles/components/work.module.scss';

export default function Work()
{
  return (
    <div>
      <ul className={styles['work-list']}>
        <li><a>Remote medical care app</a></li>
        <li><a>Interaction design</a></li>
        <li><a>Svg icon set</a></li>
        <li><a>Retro style mini game</a></li>
      </ul>
    </div>
  );
}