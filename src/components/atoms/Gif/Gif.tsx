import React, { FC } from 'react'

type Props = {
  route: string
  alt: string
}

export const Gif: FC<Props> = ({ route, alt }) => {
  return <img src={route} alt={alt} />
}
