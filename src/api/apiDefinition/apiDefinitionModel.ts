export type ResponseModel = {
  description: string;
};

export type ResponsesModel = {
  [code: string]: ResponseModel;
};

export type ParameterModel = {
  name: string;
  in: string;
  description: string;
  required: boolean;
  type?: string;
  format?: string;
};

export type PathModel = {
  tags: string[];
  description: string;
  operationId: string;
  summary: string;
  produces: string[];
  parameters: ParameterModel[];
  responses: ResponsesModel;
};

export type PathsModel = {
  [name: string]: {
    [method: string]: PathModel;
  };
};

export type TagModel = {
  name: string;
  description: string;
};

export type LicenseModel = {
  name: string;
  url: string;
};

export type ContactModel = {
  email: string;
};

export type InfoModel = {
  description: string;
  version: string;
  title: string;
  termsOfService: string;
  contact: ContactModel;
  license: LicenseModel;
};

export type ApiDefinitionModel = {
  info: InfoModel;
  host: string;
  basePath: string;
  tags: TagModel[];
  paths: PathsModel;
};
