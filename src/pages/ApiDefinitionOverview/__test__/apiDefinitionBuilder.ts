import {
  ApiDefinition,
  Contact,
  Info,
  License,
  Parameter,
  Path,
  Response,
  Tag,
} from '../components/types/apiDefinition';

export const buildTag = (tag?: Partial<Tag>): Tag => ({
  name: 'pet',
  description: 'Everything about your Pets',
  ...tag,
});

export const buildResponse = (response?: Partial<Response>): Response => ({
  code: '405',
  description: 'Invalid input',
  ...response,
});

export const buildParameter = (parameter?: Partial<Parameter>): Parameter => ({
  name: 'body',
  in: 'body',
  description: 'Pet object that needs to be added to the store',
  required: true,
  ...parameter,
});

export const buildPath = (path?: Partial<Path>): Path => ({
  name: '/pet',
  method: 'post',
  description: '',
  operationId: 'addPet',
  produces: ['application/json'],
  summary: 'Add a new pet to the store',
  parameters: [buildParameter()],
  tags: ['pet'],
  responses: [buildResponse()],
  ...path,
});

export const buildLicense = (license?: Partial<License>): License => ({
  name: 'Apache 2.0',
  url: 'http://www.apache.org/licenses/LICENSE-2.0.html',
  ...license,
});

export const buildContact = (contact?: Partial<Contact>): Contact => ({
  email: 'apiteam@swagger.io',
  ...contact,
});

export const buildInfo = (info?: Partial<Info>): Info => ({
  title: 'Swagger Petstore',
  baseUrl: 'petstore.swagger.io/v2',
  description: 'This is a sample server Petstore server.',
  version: '1.0.6',
  termsOfService: 'http://swagger.io/terms/',
  contact: buildContact(),
  license: buildLicense(),
  ...info,
});

export const buildApiDefinition = (
  apiDefinition?: Partial<ApiDefinition>,
): ApiDefinition => ({
  paths: [buildPath()],
  tags: [buildTag()],
  info: buildInfo(),
  ...apiDefinition,
});
