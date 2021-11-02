import { theme as defaultTheme } from '@mycrypto/ui';
import merge from 'lodash.merge';

export const theme = merge(defaultTheme, {
  colors: {
    border: { light: '#e3e3e3', dark: '#b5bfc7' },
    background: {
      page: '#ffffff',
      profile: '#e4eaed',
      section: '#f6f8fa',
      quote: '#a582ff'
    },
    text: {
      accent: '#8f8f8f'
    }
  },
  variants: {
    banner: {
      info: {
        color: 'text.accent'
      },
      transparent: {
        background: 'rgba(22, 49, 80, 0.15)',
        color: 'text.primary'
      }
    }
  },
  text: {
    heading: {
      color: 'text.primary'
    },
    subHeading: {
      color: 'text.primary'
    }
  },
  fontSizes: {
    tiny: '14px',
    small: '18px',
    medium: '24px',
    large: '45px'
  }
});

export type Theme = typeof theme;
