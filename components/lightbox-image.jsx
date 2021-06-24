import { useContext } from 'react'

import { LightBoxContext } from '@/pages/_app';

export default function LightBoxImage(props)
{
  const { setLightbox } = useContext(LightBoxContext);

  const { src, alt, className } = props;

  return (
    <img src={src} alt={alt} className={className} onClick={() => setLightbox({ src, alt })} />
  )
}