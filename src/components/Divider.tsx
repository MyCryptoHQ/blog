import type { BoxProps } from '@mycrypto/ui';
import { Box } from '@mycrypto/ui';
import type { FunctionComponent } from 'react';

export type DividerProps = BoxProps;

export const Divider: FunctionComponent<DividerProps> = (props) => (
  <Box width="100%" height="1px" backgroundColor="border.dark" {...props} />
);
