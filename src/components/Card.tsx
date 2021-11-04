import type { BoxProps } from '@mycrypto/ui';
import { Flex } from '@mycrypto/ui';
import type { FunctionComponent } from 'react';

export type CardProps = BoxProps;

export const Card: FunctionComponent<CardProps> = ({ children, ...props }) => (
  <Flex
    padding="24px"
    backgroundColor="background.page"
    flexDirection="column"
    sx={{ borderRadius: 'large', boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.07)' }}
    {...props}
  >
    {children}
  </Flex>
);

export default Card;
