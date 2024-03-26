module.exports = {
    webpack: {
      module: {
        rules: [
          {
            test: /\.svg$/,
            use: ['@svgr/webpack'],
          },
        ],
      },
    },
  };
  