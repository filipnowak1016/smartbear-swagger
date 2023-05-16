import { ReactNode } from 'react';

export type DescriptionListItem = {
  key: string;
  name: string | ReactNode;
  description: string | ReactNode;
};
