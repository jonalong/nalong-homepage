import styles from '@/styles/components/work.module.scss';
import CircleText from '@/components/circle-text';

export default function Work()
{
  return (
    <div>
      <ul className={styles['work-list']}>
        <li>
          <CircleText className={styles['point-text']} image="/images/voidoc.png" href="/works/vodoc">
            Remote medical care app
          </CircleText>
        </li>
        <li>
          <CircleText className={styles['point-text']} image="/images/tosoone.png" href="https://nalong.studio">
            Interaction design
          </CircleText>
        </li>
        <li><a>Svg icon set</a></li>
        <li>
          <CircleText className={styles['point-text']} image="/images/game.png" href="https://nalong.studio">
            Retro style mini game
          </CircleText>
        </li>
      </ul>
    </div>
  );
}