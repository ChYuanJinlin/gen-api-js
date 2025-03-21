module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
          ie: '11' // 例如，您可以指定需要支持的最低浏览器版本，这里以 IE11 为例
        },
        useBuiltIns: 'entry', // 改为 'entry' 以确保所有核心 JavaScript 特性都被包含
        corejs: 3, // 使用 CoreJS 3 作为 polyfill 来源
        bugfixes: true // 包含最新的 bug 修复
      }
    ],
  ],
  plugins: [
    "@babel/plugin-transform-runtime",
    "@babel/plugin-proposal-private-methods",
    "@babel/plugin-transform-modules-commonjs"
  ],
  ignore: ["src/test","src/config/"],
};
