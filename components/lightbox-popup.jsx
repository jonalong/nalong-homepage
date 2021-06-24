import Router from 'next/router'
import { useContext, useEffect, useRef } from 'react';

import { LightBoxContext } from '@/pages/_app';

import styles from '@/styles/components/lightbox-popup.module.scss';

export default function LightboxPopup()
{
  const { lightbox, setLightbox } = useContext(LightBoxContext);
  const { src, alt } = lightbox
  const imgRef = useRef(null)

  useEffect(() => {
    const handleBeforeHistoryChange = () => setLightbox(null);
    Router.events.on('beforeHistoryChange', handleBeforeHistoryChange);
    return () => {
      Router.events.off('beforeHistoryChange', handleBeforeHistoryChange)
    }
  }, []);

  const handleImageLoaded = () =>
  {
    if (screen.height < imgRef.current.height)
    {
      imgRef.current.style.alignSelf = 'flex-start';
    }
  }

  return (
    <div className={styles.popup} onClick={() => setLightbox(null)}>
      <img ref={imgRef} className={styles.image} src={src} alt={alt} onLoad={handleImageLoaded} />
    </div>
  )
}