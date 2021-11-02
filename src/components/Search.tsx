import { Trans } from '@lingui/macro';
import { Body } from '@mycrypto/ui';
import { graphql, useStaticQuery } from 'gatsby';
import { Index } from 'lunr';
import type { FunctionComponent} from 'react';
import { useEffect, useMemo, useState } from 'react';

import type { GhostPost } from '../types';
import { Post } from './Post';
import { Posts } from './Posts';


export interface SearchProps {
  query: string;
}

interface QueryResult {
  localSearchPosts: {
    index: string;
    store: Record<string, GhostPost>;
  };
}

export const Search: FunctionComponent<SearchProps> = ({ query }) => {
  const data = useStaticQuery<QueryResult>(graphql`
    {
      localSearchPosts {
        index
        store
      }
    }
  `);

  const index = useMemo(() => Index.load(JSON.parse(data.localSearchPosts.index)), []);
  const [results, setResults] = useState<Index.Result[]>([]);

  useEffect(() => {
    setResults(index.search(query));
  }, [query]);

  if (results.length === 0) {
    return (
      <Body>
        <Trans>Sorry, there are no results for "{query}". Please try another search query.</Trans>
      </Body>
    );
  }

  return (
    <Posts>
      {results.map((result) => (
        <Post
          key={data.localSearchPosts.store[result.ref].slug}
          post={data.localSearchPosts.store[result.ref]}
        />
      ))}
    </Posts>
  );
};
