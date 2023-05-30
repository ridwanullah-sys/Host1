const webpack = require("webpack");

module.exports = function override(config) {
  const fallback = config.resolve.fallback || {};
  Object.assign(fallback, {
    crypto: require.resolve("crypto-browserify"),
    stream: require.resolve("stream-browserify"),
    assert: require.resolve("assert"),
    http: require.resolve("stream-http"),
    https: require.resolve("https-browserify"),
    os: require.resolve("os-browserify"),
    url: require.resolve("url"),
    child_process: "empty",
    fs: require.resolve("browserify-fs"),
    util: require.resolve("util"),
    http: require.resolve("stream-http"),
    https: require.resolve("https-browserify"),
    tls: require.resolve("tls-browserify"),
    net: require.resolve("net-browserify"),
    crypto: require.resolve("crypto-browserify"),
    path: require.resolve("path-browserify"),
    os: require.resolve("os-browserify"),
    stream: require.resolve("stream-browserify"),
    zlib: require.resolve("browserify-zlib"),
  });
  config.resolve.fallback = fallback;
  config.plugins = (config.plugins || []).concat([
    new webpack.ProvidePlugin({
      process: "process/browser",
      Buffer: ["buffer", "Buffer"],
    }),
  ]);
  config.ignoreWarnings = [/Failed to parse source map/];
  return config;
};
