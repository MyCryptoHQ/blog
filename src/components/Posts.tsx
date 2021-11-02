import type { BoxProps} from '@mycrypto/ui';
import { Box, SubHeading } from '@mycrypto/ui';
import type { FunctionComponent } from 'react';

import { Grid } from './Grid';

export interface PostsProps {
  title?: string;
  columns?: number;
}

export const Posts: FunctionComponent<PostsProps & BoxProps> = ({
  title,
  columns = 3,
  children,
  ...props
}) => (
  <Box {...props}>
    {title && (
      <SubHeading fontSize="large" lineHeight="120%" marginBottom="4">
        {title}
      </SubHeading>
    )}
    <Grid columns={columns}>{children}</Grid>
  </Box>
);
