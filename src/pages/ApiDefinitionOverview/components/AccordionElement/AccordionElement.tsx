import React, { FC, PropsWithChildren } from 'react';
import { Disclosure } from '@headlessui/react';
import { AccordionElementHeader } from '../AccordionElementHeader';
import { AccordionElementContent } from '../AccordionElementContent';

export type AccordionElementProps = {
  headline: string;
  description?: string;
  defaultOpen?: boolean;
};

const AccordionElement: FC<PropsWithChildren<AccordionElementProps>> = ({
  headline,
  description,
  defaultOpen = true,
  children,
}) => {
  return (
    <Disclosure
      as="div"
      className="border-t border-gray-200 px-4 py-6"
      defaultOpen={defaultOpen}
    >
      {({ open }) => (
        <>
          <AccordionElementHeader
            headline={headline}
            description={description}
            open={open}
          />
          <AccordionElementContent>{children}</AccordionElementContent>
        </>
      )}
    </Disclosure>
  );
};

export default AccordionElement;
