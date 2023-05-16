export type Response = {
  code: string;
  description: string;
};

export type Parameter = {
  name: string;
  in: string;
  description: string;
  required: boolean;
  type?: string;
  format?: string;
};

export type Method = 'post' | 'get' | 'put' | 'delete';

export type Path = {
  name: string;
  method: Method;
  tags: string[];
  summary: string;
  operationId: string;
  description: string;
  produces: string[];
  parameters: Parameter[];
  responses: Response[];
};

export type Tag = {
  name: string;
  description: string;
};

export type License = {
  name: string;
  url: string;
};

export type Contact = {
  email: string;
};

export type Info = {
  baseUrl: string;
  description: string;
  version: string;
  title: string;
  termsOfService: string;
  contact: Contact;
  license: License;
};

export type ApiDefinition = {
  info: Info;
  tags: Tag[];
  paths: Path[];
};
