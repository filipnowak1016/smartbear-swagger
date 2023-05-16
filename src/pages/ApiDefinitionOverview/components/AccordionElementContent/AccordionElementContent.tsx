import React, { FC, PropsWithChildren } from 'react';
import { Disclosure } from '@headlessui/react';

const AccordionElementContent: FC<PropsWithChildren> = ({ children }) => (
  <Disclosure.Panel className="pt-6 pb-3">
    <div className="space-y-2">{children}</div>
  </Disclosure.Panel>
);

export default AccordionElementContent;
