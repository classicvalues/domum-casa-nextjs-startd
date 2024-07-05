const withSvgr = require('@svgr/webpack');

module.exports = withSvgr({
  reactStrictMode: true,
  webpack(config, options) {
    try {
      // Add SVG loader
      config.module.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      });

      // Additional configuration can be added here
    } catch (error) {
      // Log the error and rethrow it if it's not an instance of Error
      console.error('Error adding SVG loader:', error);

      if (!(error instanceof Error)) {
        console.error('The caught error is not an instance of Error:', error);
        throw new TypeError('Error must be an instance of Error');
      }

      throw error;
    }

    return config;
  },
});
