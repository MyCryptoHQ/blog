const { useGatsbyConfig } = require('gatsby-plugin-ts-config');

module.exports = useGatsbyConfig(() => require('./gatsby/gatsby-config'), {});
