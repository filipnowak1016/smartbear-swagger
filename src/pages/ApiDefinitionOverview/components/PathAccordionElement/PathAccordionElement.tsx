import React, { FC } from 'react';
import { Method, Path } from '../types/apiDefinition';
import { Disclosure } from '@headlessui/react';
import AccordionElementIcon from '../../../../components/AccordionElementIcon/AccordionElementIcon';
import { AccordionElementContent } from '../AccordionElementContent';
import { Badge } from '../../../../components/Badge';
import { PathDetails } from '../PathDetails';

type Color = {
  border: string;
  badge: string;
  bg: string;
};

const colors: Record<Method | 'default', Color> = {
  get: {
    border: 'border-green-400',
    badge: 'bg-green-400',
    bg: 'bg-green-50',
  },
  post: {
    border: 'border-blue-400',
    badge: 'bg-blue-400',
    bg: 'bg-blue-50',
  },
  put: {
    border: 'border-yellow-400',
    badge: 'bg-yellow-400',
    bg: 'bg-yellow-50',
  },
  delete: {
    border: 'border-red-400',
    badge: 'bg-red-400',
    bg: 'bg-red-50',
  },
  default: {
    border: 'border-gray-400',
    badge: 'bg-gray-400',
    bg: 'bg-gray-50',
  },
};

export type PathAccordionElementProps = {
  path: Path;
};

const PathAccordionElement: FC<PathAccordionElementProps> = ({ path }) => {
  const color: Color = colors[path.method] || colors.default;
  return (
    <Disclosure
      as="div"
      className={`border ${color.border} ${color.bg} px-4 py-2`}
    >
      {({ open }) => (
        <>
          <h3 className="-mx-2 -my-3 flow-root">
            <Disclosure.Button className="flex w-full items-center justify-between px-2 py-3 text-gray-400 hover:text-gray-500">
              <div className="flex items-center">
                <Badge
                  label={path.method.toUpperCase()}
                  className={`w-20 ${color.badge}`}
                />
                <span className="ml-3 text-base font-bold font-medium text-gray-900">
                  {path.name}
                </span>
                <span className="ml-3 text-sm text-gray-700">
                  {path.summary}
                </span>
              </div>
              <AccordionElementIcon open={open} />
            </Disclosure.Button>
          </h3>
          <AccordionElementContent>
            <PathDetails path={path} />
          </AccordionElementContent>
        </>
      )}
    </Disclosure>
  );
};

export default PathAccordionElement;
