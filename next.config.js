module.exports = {
    webpack: (config, { isServer }) => {
      // Exclude fs and module from being bundled in client-side builds
      if (!isServer) {
        config.externals = {
          fs: 'empty',
          module: 'empty',
          v8: 'empty',
        };
      }
  
      return config;
    },
  };
  