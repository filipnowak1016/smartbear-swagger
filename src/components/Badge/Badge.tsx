import React, { FC } from 'react';
import { textSizeClasses } from '../../constants/style';

type BadgeProps = {
  size?: 'xs' | 'sm' | 'base';
  className?: string;
  label: string;
};

const Badge: FC<BadgeProps> = ({ size = 'base', label, className = '' }) => {
  return (
    <span
      className={`${textSizeClasses[size]} rounded-full font-medium py-0.5 px-3 text-gray-50 ${className}`}
    >
      {label}
    </span>
  );
};

export default Badge;
