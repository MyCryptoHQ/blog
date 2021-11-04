import { t } from '@lingui/macro';
import type { BoxProps } from '@mycrypto/ui';
import { Box, Input } from '@mycrypto/ui';
import { navigate } from 'gatsby';
import type { ChangeEvent, FunctionComponent, KeyboardEvent } from 'react';
import { useState } from 'react';

export interface SearchFieldProps {
  placeholder?: string;
}

export const SearchField: FunctionComponent<SearchFieldProps & BoxProps> = ({
  placeholder = t`Search here...`,
  ...props
}) => {
  const [query, setQuery] = useState('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && query) {
      navigate(`/search/?query=${encodeURI(query)}`);
    }
  };

  return (
    <Box maxWidth="400px" marginX="auto" {...props}>
      <Input
        variant="simple"
        icon="search"
        type="search"
        placeholder={placeholder}
        value={query}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
        aria-label={t`Search`}
      />
    </Box>
  );
};
