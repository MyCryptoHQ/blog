import type { TextProps } from '@mycrypto/ui';
import { Text } from '@mycrypto/ui';
import { Link as GatsbyLink } from 'gatsby';
import type { FunctionComponent } from 'react';

export interface LinkProps {
  to: string;
  isExternal?: boolean;
}

const BaseLink: FunctionComponent<TextProps> = ({ children, ...props }) => (
  <Text
    color="link"
    display="inline"
    sx={{
      textDecoration: 'none',
      transition: 'color 0.2s',
      ':hover': {
        color: 'button.primary.hover'
      }
    }}
    {...props}
  >
    {children}
  </Text>
);

export const Link: FunctionComponent<LinkProps & TextProps> = ({
  to,
  isExternal = false,
  children,
  ...props
}) => {
  if (isExternal) {
    return (
      <BaseLink as="a" href={to} rel="noopener noreferrer" {...props}>
        {children}
      </BaseLink>
    );
  }

  return (
    // @ts-expect-error Issue with Rebass types
    <BaseLink as={GatsbyLink} to={to} {...props}>
      {children}
    </BaseLink>
  );
};
