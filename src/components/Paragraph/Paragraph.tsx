import React, { FC, PropsWithChildren } from 'react';
import { FontSize } from '../../types/style';
import { textSizeClasses } from '../../constants/style';

type ParagraphProps = {
  size?: FontSize;
  className?: string;
};

const Paragraph: FC<PropsWithChildren<ParagraphProps>> = ({
  size = 'base',
  children,
  className = '',
}) => {
  return (
    <h1 className={`${textSizeClasses[size]} text-gray-900 ${className}`}>
      {children}
    </h1>
  );
};

export default Paragraph;
