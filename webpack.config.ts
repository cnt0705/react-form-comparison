import path from 'path'
import { Configuration } from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'

const webpackConfig = (): Configuration => ({
  mode: 'development',
  entry: './src/index.tsx',
  output: {
    filename: 'bundle.[fullhash].js',
    path: path.resolve(__dirname, 'public'),
  },
  module: {
    rules: [
      {
        test: /\.js(x?)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.ts(x?)$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
    modules: ['node_modules', path.resolve(__dirname, 'src')],
    alias: {
      components: path.resolve(__dirname, './src/components/'),
    },
  },
  plugins: [new HtmlWebpackPlugin({ template: './src/index.html' })],
})

export default webpackConfig
