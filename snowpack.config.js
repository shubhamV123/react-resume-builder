//alias: https://github.com/pikapkg/snowpack/pull/603
module.exports = {
  mount: {
    public: '/',
    src: '/_dist_',
  },
  alias: {
    '@app': './src',
    components: './src/components',
    '@styles': './src/styles/index.scss',
  },
  installOptions: {
    namedExports: [
      'react-ace',
      'ace-builds',
      '@material-ui/icons',
      'react-swipeable-views',
    ],
  },
  buildOptions: {
    sourceMaps: true,
    baseUrl: '/',
    clean: true,
    metaDir: 'static/snowpack',
  },
  plugins: [
    '@snowpack/plugin-react-refresh',
    '@snowpack/plugin-dotenv',
    '@snowpack/plugin-sass',
    '@snowpack/plugin-webpack',
  ],
};
