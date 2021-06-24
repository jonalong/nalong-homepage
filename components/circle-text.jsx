import { useContext } from 'react';
import Link from 'next/link';

import { CircleImageContext } from '@/pages/index';

export default function CircleText(props)
{
  const { setCircleImage } = useContext(CircleImageContext);

  const handleMouseEnter = () =>
  {
    setCircleImage(props.image);
  };

  const handleMouseLeave = () =>
  {
    setCircleImage(null)
  };

  if (props.href)
  {
    if (props.href.startsWith('http'))
    {
      return (
        <a className={props.className} href={props.href} target={props.target}
          onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
          onClick={handleMouseLeave}>
          {props.children}
        </a>
      );
    }
    else
    {
      return (
        <Link href={props.href}>
          <a className={props.className}
            onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
            onClick={handleMouseLeave}>
            {props.children}
          </a>
        </Link>
      );
    }
    
  }
  else
  {
    return (
      <span className={props.className}
        onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        {props.children}
      </span>
    );
  }
}