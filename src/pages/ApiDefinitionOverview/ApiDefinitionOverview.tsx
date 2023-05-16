import React, { FC, useEffect, useState } from 'react';
import { ApiDefinitionInfo } from './components/ApiDefinitionInfo';
import { ApiDefinitionPaths } from './components/ApiDefinitionPaths';
import { getApiDefinition } from '../../api/apiDefinition/apiDefinitionClient';
import { ApiDefinition } from './components/types/apiDefinition';
import { mapApiDefinition } from './ApiDefinitionOverview.utils';
import { LoadingSpinner } from '../../components/LoadingSpinner';

const ApiDefinitionOverview: FC = () => {
  const [loading, setLoading] = useState(true);
  const [apiDefinition, setApiDefinition] = useState<ApiDefinition>();

  useEffect(() => {
    getApiDefinition()
      .then((data) => {
        setApiDefinition(mapApiDefinition(data));
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <LoadingSpinner />;
  }

  if (!apiDefinition) {
    return <div>API Definition could not be loaded.</div>;
  }

  return (
    <>
      <ApiDefinitionInfo info={apiDefinition.info} />
      <ApiDefinitionPaths
        paths={apiDefinition.paths}
        tags={apiDefinition.tags}
      />
    </>
  );
};

export default ApiDefinitionOverview;
