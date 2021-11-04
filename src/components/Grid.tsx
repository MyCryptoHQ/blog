import type { BoxProps } from '@mycrypto/ui';
import { Box } from '@mycrypto/ui';
import type { FunctionComponent } from 'react';

export interface GridProps {
  columns: number;
}

export const Grid: FunctionComponent<GridProps & BoxProps> = ({ columns, children, ...props }) => (
  <Box
    display="grid"
    sx={{
      gridTemplateColumns: ['repeat(1, 1fr)', null, `repeat(${columns}, 1fr)`],
      gap: '25px'
    }}
    {...props}
  >
    {children}
  </Box>
);
