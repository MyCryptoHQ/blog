import type { BoxProps } from '@mycrypto/ui';
import { Box, Container } from '@mycrypto/ui';
import type { FunctionComponent } from 'react';

export type SectionProps = BoxProps;

export const Section: FunctionComponent<SectionProps> = ({ children, ...props }) => (
  <Box backgroundColor="background.section" paddingY="5" {...props}>
    <Container>{children}</Container>
  </Box>
);
