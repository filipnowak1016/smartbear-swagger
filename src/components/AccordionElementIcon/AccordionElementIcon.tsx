import React, { FC, PropsWithChildren } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/20/solid';

type AccordionElementIconProps = {
  open: boolean;
};

const AccordionElementIcon: FC<
  PropsWithChildren<AccordionElementIconProps>
> = ({ open }) => {
  return (
    <span className="ml-6 flex items-center">
      {open ? (
        <ChevronUpIcon className="h-5 w-5" aria-hidden="true" />
      ) : (
        <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
      )}
    </span>
  );
};

export default AccordionElementIcon;
