import { useContext } from 'react'

import { LightBoxContext } from '@/pages/_app';

export default function LightBoxImage(props)
{
  const { setLightbox } = useContext(LightBoxContext);

  const { src, alt } = props;

  return (
    <img src={src} alt={alt} onClick={() => setLightbox({ src, alt })} />
  )
}