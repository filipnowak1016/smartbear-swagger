import {
  ApiDefinitionModel,
  PathsModel,
} from '../../api/apiDefinition/apiDefinitionModel';
import {
  ApiDefinition,
  Method,
  Path,
  Response,
} from './components/types/apiDefinition';

const mapPaths = (pathsModel: PathsModel): Path[] => {
  return Object.keys(pathsModel).reduce<Path[]>((result, pathName) => {
    result.push(
      ...Object.entries(pathsModel[pathName]).map<Path>(([method, path]) => ({
        name: pathName,
        method: method as Method,
        description: path.description,
        operationId: path.operationId,
        tags: path.tags,
        produces: path.produces,
        summary: path.summary,
        parameters: [...path.parameters],
        responses: Object.entries(path.responses).map<Response>(
          ([code, response]) => ({
            code,
            description: response.description,
          }),
        ),
      })),
    );
    return result;
  }, []);
};

export const mapApiDefinition = (
  apiDefinitionModel: ApiDefinitionModel,
): ApiDefinition => {
  const { info, host, basePath, tags, paths } = apiDefinitionModel;
  return {
    info: {
      ...info,
      baseUrl: `${host}${basePath}`,
    },
    tags,
    paths: mapPaths(paths),
  };
};
