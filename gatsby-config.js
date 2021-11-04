const { useGatsbyConfig } = require('gatsby-plugin-ts-config');
require('dotenv').config();

module.exports = useGatsbyConfig(() => require('./config/gatsby-config'), {});
