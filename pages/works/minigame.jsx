import { useEffect, useState, useRef } from 'react';

import common from '@/styles/common.module.scss';
import styles from '@/styles/components/work-detail.module.scss';

export default function TosoonePage()
{
  const containerRef = useRef(null);
  const [iframeHeight, setIframeHeight] = useState(0);

  const handleResize = () =>
  {
    const width = containerRef.current.clientWidth;
    setIframeHeight(width / 2);
  };

  useEffect(() =>
  {
    handleResize();
    document.addEventListener('resize', handleResize, false);

    return () =>
    {
      document.removeEventListener('resize', handleResize);
    };
  });

  return (
    <div className={common.container} ref={containerRef}>
      <div className={styles['work-block']}>
        <p>
          This game works by touch or mouse click. Catch the mouse while avoiding falling acorns.
        </p>
        <iframe src="https://old.nalong.studio/work/cat/game/" width="100%" height={`${iframeHeight}px`} />
        <img src="/catgame/cat01.png" alt="project image"/>
        <img src="/catgame/cat02.png" alt="project image"/>
        <img src="/catgame/cat03.png" alt="project image"/>
        <img src="/catgame/cat04.png" alt="project image"/>
        <img src="/catgame/cat06.gif" alt="project image"/>
      </div>
    </div>
  )
}