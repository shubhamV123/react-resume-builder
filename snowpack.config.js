//alias: https://github.com/pikapkg/snowpack/pull/603
module.exports = {
  mount: {
    public: '/',
    src: '/_dist_',
  },
  alias: {
    '@app': './src',
    components: './src/components',
    styles: './src/styles',
  },
  plugins: [
    '@snowpack/plugin-react-refresh',
    '@snowpack/plugin-dotenv',
    '@snowpack/plugin-optimize',
    [
      '@snowpack/plugin-run-script',
      {
        cmd:
          'node-sass-chokidar ./src/ -o ./src/ --output-style expanded --include-path src/ --include-path node_modules/',
        watch: '$1 --watch ',
      },
    ],
  ],
};
