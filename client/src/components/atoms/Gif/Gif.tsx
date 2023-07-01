import React, { FC } from 'react'
import './Gif.css'
type Props = {
  route: string
  alt: string
}

export const Gif: FC<Props> = ({ route, alt }) => {
  return <img className="gif" src={route} alt={alt} />
}
