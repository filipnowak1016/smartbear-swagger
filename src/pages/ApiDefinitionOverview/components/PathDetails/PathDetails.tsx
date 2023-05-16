import React, { FC } from 'react';
import { Path } from '../types/apiDefinition';
import ParametersDescriptionList from '../ParametersDescriptionList/ParametersDescriptionList';
import { ResponsesDescriptionList } from '../ResponsesDescriptionList';

type PathDetailsProps = {
  path: Path;
};

const PathDetails: FC<PathDetailsProps> = ({ path }) => {
  return (
    <>
      {path.description && (
        <h3 className="text-base text-gray-900">{path.description}</h3>
      )}
      <h3 className="text-base font-semibold leading-6 text-gray-900">
        Parameters
      </h3>
      {path.parameters.length > 0 ? (
        <ParametersDescriptionList parameters={path.parameters} />
      ) : (
        <div>No parameters</div>
      )}
      <h3 className="text-base font-semibold leading-6 text-gray-900">
        Responses
      </h3>
      {path.responses.length > 0 ? (
        <ResponsesDescriptionList responses={path.responses} />
      ) : (
        <div>No responses</div>
      )}
    </>
  );
};

export default PathDetails;
