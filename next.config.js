const withSvgr = require('@svgr/webpack');

module.exports = withSvgr({
  reactStrictMode: true,
  webpack(config, options) {
    try {
      config.module.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      });
    } catch (error) {
      console.error('Error adding SVG loader:', error);
      if (!(error instanceof Error)) {
        throw new TypeError('Error must be an instance of Error');
      }
      throw error;
    }

    return config;
  },
});
