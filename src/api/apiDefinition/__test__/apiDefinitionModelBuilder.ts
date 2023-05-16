import {
  ApiDefinitionModel,
  ContactModel,
  InfoModel,
  LicenseModel,
  ParameterModel,
  PathModel,
  ResponseModel,
  TagModel,
} from '../apiDefinitionModel';

export const buildTagModel = (tag?: Partial<TagModel>): TagModel => ({
  name: 'pet',
  description: 'Everything about your Pets',
  ...tag,
});

export const buildResponseModel = (
  response?: Partial<ResponseModel>,
): ResponseModel => ({
  description: 'Invalid input',
  ...response,
});

export const buildParameterModel = (
  parameter?: Partial<ParameterModel>,
): ParameterModel => ({
  name: 'body',
  in: 'body',
  description: 'Pet object that needs to be added to the store',
  required: true,
  ...parameter,
});

export const buildPathModel = (path?: Partial<PathModel>): PathModel => ({
  description: '',
  produces: ['application/json'],
  summary: 'Add a new pet to the store',
  operationId: 'addPet',
  parameters: [buildParameterModel()],
  tags: ['pet'],
  responses: {
    405: buildResponseModel(),
  },
  ...path,
});

export const buildLicenseModel = (
  license?: Partial<LicenseModel>,
): LicenseModel => ({
  name: 'Apache 2.0',
  url: 'http://www.apache.org/licenses/LICENSE-2.0.html',
  ...license,
});

export const buildContactModel = (
  contact?: Partial<ContactModel>,
): ContactModel => ({
  email: 'apiteam@swagger.io',
  ...contact,
});

export const buildInfoModel = (info?: Partial<InfoModel>): InfoModel => ({
  title: 'Swagger Petstore',
  description: 'This is a sample server Petstore server.',
  version: '1.0.6',
  termsOfService: 'http://swagger.io/terms/',
  contact: buildContactModel(),
  license: buildLicenseModel(),
  ...info,
});

export const buildApiDefinitionModel = (
  apiDefinition?: Partial<ApiDefinitionModel>,
): ApiDefinitionModel => ({
  host: 'petstore.swagger.io',
  basePath: '/v2',
  paths: {
    '/pet': {
      post: buildPathModel(),
    },
  },
  tags: [buildTagModel()],
  info: buildInfoModel(),
  ...apiDefinition,
});
