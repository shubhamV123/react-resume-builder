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
  packageOptions: {
    knownEntrypoints: [
      'react-ace',
      'ace-builds',
      'react-swipeable-views',
      // '@mui/utils',
    ],
    // knownEntrypoints:[
    //   '@mui/utils'
    // ]
  },
  buildOptions: {
    sourcemap: true,
    baseUrl: '/',
    clean: true,
    metaUrlPath: 'static/snowpack',
  },
  optimize: {
    bundle: true,
    minify: true,
  },
  plugins: [
    '@snowpack/plugin-react-refresh',
    '@snowpack/plugin-dotenv',
    '@snowpack/plugin-sass',
  ],
};
