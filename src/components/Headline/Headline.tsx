import React, { FC, PropsWithChildren } from 'react';
import { FontSize } from '../../types/style';
import { textSizeClasses } from '../../constants/style';

type HeadlineProps = {
  size?: FontSize;
  className?: string;
};

const Headline: FC<PropsWithChildren<HeadlineProps>> = ({
  size = 'base',
  children,
  className = '',
}) => {
  return (
    <h1
      className={`${textSizeClasses[size]} font-bold tracking-tight text-gray-900 ${className}`}
    >
      {children}
    </h1>
  );
};

export default Headline;
