# blog

Source code of the MyCrypto blog, which can be found on [blog.mycrypto.com](https://blog.mycrypto.com). It's built on React and Gatsby, and pulls content from Ghost CMS.

## Getting Started

### Development

To start a development server, run the following command.

```text
yarn start
```

The server will be accessible on `localhost:8000`.

### Production

To build a static version of the blog production, run the following commands

```
yarn compile
yarn build
```

This compiles the translation files, and creates a production build. The blog is automatically built and deployed when a new tag is pushed.

## License

The blog is [MIT licensed](./LICENSE).
