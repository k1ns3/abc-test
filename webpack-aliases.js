// eslint-disable-next-line @typescript-eslint/no-var-requires,import/no-extraneous-dependencies
const path = require('path');

module.exports = {
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    alias: {
      images: path.join(__dirname, 'images'),
      styles: path.resolve(__dirname, 'src', 'styles'),
      '@Utils': path.resolve(__dirname, 'src', 'utils'),
      '@Types': path.resolve(__dirname, 'src', 'types')
    }
  }
};
