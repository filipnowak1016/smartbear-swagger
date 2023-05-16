import { ApiDefinitionModel } from './apiDefinitionModel';
import { get } from '../apiClient';

const API_DEFINITION_URL = 'https://petstore.swagger.io/v2/swagger.json';

export const getApiDefinition = async (): Promise<ApiDefinitionModel> => {
  return get<ApiDefinitionModel>(API_DEFINITION_URL);
};
