// eslint-disable-next-line no-undef
module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'react-native-reanimated/plugin',
      [
        'module-resolver',
        {
          alias: {
            '@assets': './assets',
            '@components': './src/components',
            '@screens': './src/screens',
            '@themes': './src/themes',
            '@services': './src/services',
            '@data': './src/data',
            '@routes': './src/routes',
            '@hooks': './src/hooks',
            '@contexts': './src/contexts',
            '@store': './src/store',
            '@utils': './src/utils',
            '@appConstants': './src/appConstants',
          },
        },
      ],
    ],
  };
};
