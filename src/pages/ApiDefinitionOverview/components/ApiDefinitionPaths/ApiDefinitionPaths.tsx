import React, { FC } from 'react';
import { Path, Tag } from '../types/apiDefinition';
import { AccordionElement } from '../AccordionElement';
import { groupPathsByTag } from './ApiDefinitionPaths.utils';
import { PathAccordionElement } from '../PathAccordionElement';

type ApiDefinitionPathsProps = {
  paths: Path[];
  tags: Tag[];
};

const ApiDefinitionPaths: FC<ApiDefinitionPathsProps> = ({ paths, tags }) => {
  const groupedPaths = groupPathsByTag(paths);
  return (
    <div>
      {Object.entries(groupedPaths).map(([tagName, paths]) => {
        const tag = tags.find((tag) => tag.name === tagName);
        return (
          <AccordionElement
            key={tagName}
            headline={tagName}
            description={tag?.description}
            defaultOpen
          >
            {paths.map((path) => (
              <PathAccordionElement
                key={`${path.operationId}_${path.name}`}
                path={path}
              />
            ))}
          </AccordionElement>
        );
      })}
    </div>
  );
};

export default ApiDefinitionPaths;
