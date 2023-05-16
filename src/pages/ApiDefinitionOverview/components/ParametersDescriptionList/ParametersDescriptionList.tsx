import React, { FC } from 'react';
import { Parameter } from '../types/apiDefinition';
import { DescriptionList } from '../DescriptionList';
import { DescriptionListItem } from '../../../../types/descriptionList';

type ParametersDescriptionListProps = {
  parameters: Parameter[];
  className?: string;
};

const ParametersDescriptionList: FC<ParametersDescriptionListProps> = ({
  parameters,
  className,
}) => {
  const items: DescriptionListItem[] = parameters.map((parameter) => ({
    key: parameter.name,
    name: (
      <>
        <div data-testid="parameter-dl-name">
          {parameter.name}
          {parameter.required && (
            <span className="ml-1 font-light">(required)</span>
          )}
        </div>
        <div className="text-xs text-gray-400" data-testid="parameter-dl-type">
          {parameter.type}
          {parameter.format && <span>({parameter.format})</span>}
        </div>
      </>
    ),
    description: parameter.description,
  }));

  return <DescriptionList items={items} className={className} />;
};

export default ParametersDescriptionList;
