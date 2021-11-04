import type { FunctionComponent, ReactElement } from 'react';
import React from 'react';

export interface HTMLProps {
  htmlAttributes: Record<string, unknown>;
  headComponents: ReactElement;
  bodyAttributes: Record<string, unknown>;
  preBodyComponents: ReactElement;
  postBodyComponents: ReactElement;
  body: string;
}

const HTML: FunctionComponent<HTMLProps> = ({
  htmlAttributes,
  headComponents,
  bodyAttributes,
  preBodyComponents,
  body,
  postBodyComponents
}) => (
  <html {...htmlAttributes}>
    <head>
      <meta charSet="utf-8" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      {headComponents}
    </head>
    <body {...bodyAttributes}>
      {preBodyComponents}
      <div key="body" id="___gatsby" dangerouslySetInnerHTML={{ __html: body }} />
      {postBodyComponents}

      <script src="/vendor/ghostboard.js" async defer data-gbid="60a4385387568653d41521d8" />
      <noscript>
        <img
          src="https://ghostboard.io/api/noscript/60a4385387568653d41521d8/pixel.gif"
          alt="Ghostboard pixel"
        />
      </noscript>
    </body>
  </html>
);

export default HTML;
