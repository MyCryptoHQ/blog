import type { FunctionComponent } from 'react';

import Root from '../Root';
import type { MetadataProps } from './Metadata';
import { Metadata } from './Metadata';

export type PageProps = MetadataProps;

export const Page: FunctionComponent<PageProps> = ({ children, ...props }) => (
  <Root>
    <Metadata {...props} />
    {children}
  </Root>
);
