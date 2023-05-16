import React, { FC } from 'react';
import { Disclosure } from '@headlessui/react';
import AccordionElementIcon from '../../../../components/AccordionElementIcon/AccordionElementIcon';

type AccordionElementHeaderProps = {
  headline: string;
  description?: string;
  open: boolean;
};

const AccordionElementHeader: FC<AccordionElementHeaderProps> = ({
  headline,
  description,
  open,
}) => (
  <h3 className="-mx-2 -my-3 flow-root">
    <Disclosure.Button className="flex w-full items-center justify-between px-2 py-3 text-gray-400 hover:text-gray-500">
      <div className="flex items-center">
        <span className="text-2xl font-bold font-medium text-gray-900">
          {headline}
        </span>
        {description && (
          <span className="text-gray-900 ml-3">{description}</span>
        )}
      </div>
      <AccordionElementIcon open={open} />
    </Disclosure.Button>
  </h3>
);

export default AccordionElementHeader;
