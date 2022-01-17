import { t, Trans } from '@lingui/macro';
import { Body, Box, Button, Copyable, Flex, Icon, SubHeading, Tooltip } from '@mycrypto/ui';
import type { FunctionComponent } from 'react';

import { useSiteMetadata } from '../hooks';
import type { GhostPost } from '../types';
import { getSocialUrl } from '../utils';
import { Card } from './Card';
import { Divider } from './Divider';
import { Link } from './Link';
import { ProfilePicture } from './ProfilePicture';

export interface SidebarProps {
  post: Pick<GhostPost, 'slug' | 'title' | 'primaryAuthor'>;
}

export const Sidebar: FunctionComponent<SidebarProps> = ({ post }) => {
  const { siteUrl } = useSiteMetadata();

  return (
    <Box as="aside" maxWidth={['100%', null, '362px']} marginBottom="4">
      <Card marginBottom="4">
        <SubHeading
          fontSize="12px"
          lineHeight="15px"
          color="text.accent"
          marginBottom="3"
          sx={{
            textTransform: 'uppercase'
          }}
        >
          <Trans>Author</Trans>
        </SubHeading>
        <Link to={`/author/${post.primaryAuthor.slug}`}>
          <Flex alignItems="center">
            <ProfilePicture
              image={post.primaryAuthor.image}
              alt={post.primaryAuthor.name}
              marginRight="3"
            />
            <Body fontSize="small" fontWeight="bold">
              {post.primaryAuthor.name}
            </Body>
          </Flex>
        </Link>

        <Divider marginY="3" />

        <SubHeading
          fontSize="12px"
          lineHeight="15px"
          color="text.accent"
          marginBottom="3"
          sx={{
            textTransform: 'uppercase'
          }}
        >
          <Trans>Share</Trans>
        </SubHeading>
        <Flex alignItems="center">
          <Link to={getSocialUrl(siteUrl, post.slug, post.title, 'twitter')} isExternal={true}>
            <Icon type="twitter" width="24px" marginRight="4" />
          </Link>
          <Link to={getSocialUrl(siteUrl, post.slug, post.title, 'facebook')} isExternal={true}>
            <Icon type="facebook" width="24px" marginRight="4" />
          </Link>
          <Link to={getSocialUrl(siteUrl, post.slug, post.title, 'linkedin')} isExternal={true}>
            <Icon type="linkedin" width="24px" marginRight="4" />
          </Link>
          <Tooltip tooltip={t`Click to copy`} placement="top" offset={[0, 10]}>
            <Copyable
              text={getSocialUrl(siteUrl, post.slug, post.title, 'link')}
              icon="link"
              width="24px"
              fill="#55b6e2"
            />
          </Tooltip>
        </Flex>
      </Card>

      <Card marginBottom="4" backgroundColor="background.muted">
        <SubHeading fontSize="small" lineHeight="22px" marginBottom="12px">
          <Trans>MyCrypto is the number one way to manage all of your Ethereum Accounts</Trans>
        </SubHeading>
        <Body color="text.accent" marginBottom="3">
          <Trans>
            You can always email us for one-on-one help using{' '}
            <Link to="mailto:support@mycrypto.com" isExternal={true}>
              support@mycrypto.com
            </Link>
          </Trans>
        </Body>
        <Link to="mailto:support@mycrypto.com" isExternal={true}>
          <Button>
            <Trans>Send Us A Message</Trans>
          </Button>
        </Link>
      </Card>
    </Box>
  );
};
