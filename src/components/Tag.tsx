import type { BoxProps } from '@mycrypto/ui';
import { Body, Box } from '@mycrypto/ui';
import type { FunctionComponent } from 'react';

import type { GhostTag } from '../types';
import { Link } from './Link';

export type TagProps = BoxProps & {
  tag: Pick<GhostTag, 'slug' | 'name'>;
};

export const Tag: FunctionComponent<TagProps> = ({ tag, ...props }) => (
  <Link to={`/tag/${tag.slug}`} marginRight="3" marginBottom="3">
    <Box sx={{ borderWidth: '2px', borderStyle: 'solid', borderColor: 'link' }} {...props}>
      <Body
        color="link"
        fontSize="16px"
        lineHeight="24px"
        fontWeight="bold"
        paddingX="3"
        paddingY="2"
        sx={{ textTransform: 'capitalize' }}
      >
        {tag.name}
      </Body>
    </Box>
  </Link>
);
