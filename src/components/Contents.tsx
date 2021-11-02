import { Box } from '@mycrypto/ui';
import type { FunctionComponent } from 'react';

export interface BlogPostProps {
  html: string;
}

export const Contents: FunctionComponent<BlogPostProps> = ({ html }) => (
  <Box
    as="article"
    fontFamily="body"
    sx={{
      color: 'text.primary',
      wordBreak: 'break-word',
      figure: {
        margin: '0',
        marginBottom: '4',
        img: { marginBottom: '3' },
        '&.kg-image-card': { textAlign: 'center' },
        '&.kg-bookmark-card': {
          '.kg-bookmark-container': {
            display: 'flex',
            backgroundColor: 'background.page',
            borderRadius: 'large',
            boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.07)',
            color: 'text.primary'
          },
          '.kg-bookmark-content': {
            display: 'flex',
            flexDirection: 'column',
            flexGrow: 1,
            justifyContent: 'flex-start',
            padding: '24px'
          },
          '.kg-bookmark-thumbnail': {
            position: 'relative',
            minWidth: '250px',
            maxWidth: '250px',
            maxHeight: '100%',
            img: {
              objectFit: 'cover',
              margin: '0',
              width: '100%',
              height: '100%',
              position: 'absolute'
            }
          },
          '.kg-bookmark-title': {
            fontWeight: 'bold',
            marginBottom: '3'
          },
          '.kg-bookmark-description': {
            color: 'text.accent',
            marginBottom: '3'
          },
          '.kg-bookmark-metadata': {
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            color: 'text.accent',
            '.kg-bookmark-author::after': {
              content: '"•"',
              marginX: '2'
            }
          },
          '.kg-bookmark-icon': {
            width: '22px',
            height: '22px',
            marginBottom: '0',
            marginRight: '2'
          }
        }
      },
      figcaption: { textAlign: 'center', color: 'text.accent' },
      img: { maxWidth: '100%', marginBottom: '4' },
      p: {
        fontSize: '16px',
        lineHeight: '24px',
        margin: '0',
        marginBottom: '4',
        code: {
          fontFamily: 'mono',
          backgroundColor: 'background.muted',
          paddingX: '1'
        }
      },
      h1: {
        fontSize: 'medium',
        lineHeight: '1',
        marginTop: '0',
        marginBottom: '24px'
      },
      h2: {
        fontSize: '20px',
        lineHeight: '1',
        marginTop: '0',
        marginBottom: '24px'
      },
      h3: {
        fontSize: 'small',
        lineHeight: '1',
        marginTop: '0',
        marginBottom: '24px'
      },
      h4: {
        fontSize: 'tiny',
        lineHeight: '1',
        marginTop: '0',
        marginBottom: '24px'
      },
      h5: {
        fontSize: 'tiny',
        lineHeight: '1',
        marginTop: '0',
        marginBottom: '24px',
        color: 'text.discrete'
      },
      a: {
        color: 'link',
        textDecoration: 'none',
        transition: 'color 0.2s',
        ':hover': {
          color: 'button.primary.hover'
        }
      },
      ul: {
        margin: '0',
        marginBottom: '4'
      },
      ol: {
        margin: '0',
        marginBottom: '4'
      },
      li: {
        paddingY: '1'
      },
      hr: {
        margin: '0',
        marginBottom: '4',
        border: 'none',
        borderBottomWidth: '1px',
        borderBottomStyle: 'solid',
        borderBottomColor: 'border.dark'
      },
      pre: {
        fontFamily: 'mono',
        code: {
          display: 'block',
          padding: '24px',
          fontFamily: 'mono',
          backgroundColor: 'background.muted',
          overflowX: 'auto',
          marginBottom: '4',
          borderWidth: '1px',
          borderStyle: 'solid',
          borderColor: 'border.dark',
          borderRadius: 'badge'
        }
      },
      blockquote: {
        marginX: '2',
        marginBottom: '4',
        padding: '20px',
        borderWidth: '8px',
        borderLeftStyle: 'solid',
        borderColor: 'background.quote',
        fontSize: '20px',
        color: 'background.quote',
        '& > :last-child': { marginBottom: '0' },
        p: {
          fontSize: '20px',
          color: 'background.quote'
        }
      }
    }}
    dangerouslySetInnerHTML={{ __html: html }}
  />
);
