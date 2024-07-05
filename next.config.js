module.exports = {
    webpack: (config, { isServer }) => {
      // Exclude perf_hooks, fs, module, and v8 from client-side builds
      if (!isServer) {
        config.externals = {
          ...config.externals,
          'perf_hooks': 'empty',
          'fs': 'empty',
          'module': 'empty',
          'v8': 'empty',
        };
      }
  
      return config;
    },
  };
  