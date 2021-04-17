import { useContext } from 'react';
import Link from 'next/link';

import { CircltTextDispatchContext } from '@/pages/_app';

export default function CircleText(props)
{
  const circleTextDispatch = useContext(CircltTextDispatchContext);

  const handleMouseEnter = () =>
  {
    circleTextDispatch({
      type: 'SET',
      payload: props.image
    });
  };

  const handleMouseLeave = () =>
  {
    circleTextDispatch({
      type: 'UNSET'
    })
  };

  if (props.href)
  {
    if (props.href.startsWith('http'))
    {
      return (
        <a className={props.className} href={props.href} target={props.target}
          onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          {props.children}
        </a>
      );
    }
    else
    {
      return (
        <Link href={props.href}>
          <a className={props.className}
            onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
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