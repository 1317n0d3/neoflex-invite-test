import React, { FC } from 'react';

interface IImage {
  src: string,
  alt: string,
  className?: string
}

const Image: FC<IImage> = ({ className, src, alt }) => {
  return (
    <img className={className} src={src} alt={alt} />
  );
}

export default Image;