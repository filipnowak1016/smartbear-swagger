import React, { FC } from 'react';
import { DescriptionListItem } from '../../../../types/descriptionList';

type DescriptionListProps = {
  nameLabel?: string;
  descriptionLabel?: string;
  items: DescriptionListItem[];
  className?: string;
};

const DescriptionList: FC<DescriptionListProps> = ({
  nameLabel = 'Name',
  descriptionLabel = 'Description',
  items,
  className,
}) => (
  <div className={`overflow-hidden bg-white shadow sm:rounded-lg ${className}`}>
    <div className="px-6 py-4 sm:grid sm:grid-cols-3 sm:gap-4">
      <div className="text-sm font-bold text-gray-900">{nameLabel}</div>
      <div className="mt-1 text-sm font-bold text-gray-900 sm:col-span-2 sm:mt-0">
        {descriptionLabel}
      </div>
    </div>
    <div className="border-t border-gray-200">
      <dl>
        {items.map((item, index) => (
          <div
            key={item.key}
            className={`${
              index % 2 === 0 ? 'bg-gray-50' : 'bg-white'
            } px-6 py-4 sm:grid sm:grid-cols-3 sm:gap-4`}
          >
            <dt className="text-sm font-medium text-gray-500">{item.name}</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
              {item.description}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  </div>
);

export default DescriptionList;
