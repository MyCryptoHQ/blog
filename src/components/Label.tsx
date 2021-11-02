import { Tag } from '@mycrypto/ui';
import type { FunctionComponent } from 'react';

import type { GhostPost } from '../types';
import { Link } from './Link';

export interface LabelProps {
  post: Required<Pick<GhostPost, 'primaryTag'>>;
}

export const Label: FunctionComponent<LabelProps> = ({ post }) => (
  <Link to={`/tag/${post.primaryTag.slug}`}>
    <Tag type="success" marginBottom="0">
      {post.primaryTag.name}
    </Tag>
  </Link>
);
