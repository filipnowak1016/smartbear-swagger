import React, { FC } from 'react';
import { Headline } from '../../../../components/Headline';
import { Paragraph } from '../../../../components/Paragraph';
import { Link } from '../../../../components/Link';
import { Badge } from '../../../../components/Badge';
import { Info } from '../types/apiDefinition';

type ApiDefinitionInfoProps = {
  info: Info;
};

const ApiDefinitionInfo: FC<ApiDefinitionInfoProps> = ({ info }) => (
  <div className="px-4 py-6">
    <Headline size="2xl" className="flex items-center">
      {info.title}
      <Badge size="sm" label={info.version} className="ml-2 bg-gray-600" />
    </Headline>
    <div>
      <span className="text-sm">[ Base URL: {info.baseUrl} ]</span>
    </div>
    <Paragraph className="mt-5">{info.description}</Paragraph>
    <div className="mt-5">
      <Link href={info.termsOfService} className="block">
        Terms of service
      </Link>
      <Link href={`mailto:${info.contact.email}`} className="block">
        Contact the developer
      </Link>
      <Link href={info.license.url} className="block">
        {info.license.name}
      </Link>
    </div>
  </div>
);

export default ApiDefinitionInfo;
