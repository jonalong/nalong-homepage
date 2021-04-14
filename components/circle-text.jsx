import { useContext } from 'react';

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
    return (
      <a className={props.className} href={props.href}
        onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        {props.children}
      </a>
    );
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