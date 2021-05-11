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
          <CircleText className={styles['point-text']} image="/images/tosoone.png" href="/works/tosoone">
            Interaction design
          </CircleText>
        </li>
        <li>
          <CircleText className={styles['point-text']} image="/images/voiceenr.png" href="/works/voiceenr">
            Voice AI app for nurse
          </CircleText>
        </li>
        <li>
          <CircleText className={styles['point-text']} image="/images/icon.png" href="/works/zeroui">
            Illust and Icon set
          </CircleText>
        </li>
        <li>
          <CircleText className={styles['point-text']} image="/images/game.png" href="/works/minigame">
            Retro style mini game
          </CircleText>
        </li>
      </ul>
    </div>
  );
}