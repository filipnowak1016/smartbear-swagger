import React, { FC } from 'react';
import { Response } from '../types/apiDefinition';
import { DescriptionList } from '../DescriptionList';
import { DescriptionListItem } from '../../../../types/descriptionList';

type ResponsesDescriptionListProps = {
  responses: Response[];
  className?: string;
};

const ResponsesDescriptionList: FC<ResponsesDescriptionListProps> = ({
  responses,
  className,
}) => {
  const items: DescriptionListItem[] = responses.map((response) => ({
    key: response.code,
    name: response.code,
    description: response.description,
  }));

  return (
    <DescriptionList nameLabel="Code" items={items} className={className} />
  );
};

export default ResponsesDescriptionList;
