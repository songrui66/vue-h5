// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  plugins: {
    "postcss-import": {},
    "postcss-url": {},
    // to edit target browsers: use "browserslist" field in package.json
    autoprefixer: {},
    "postcss-px-to-viewport": {
      viewportWidth: 750,
      viewportHeight: 1334,
      unitPrecision: 5,
      viewportUnit: "vw",
      selectorBlackList: [],
      minPixelValue: 1,
      mediaQuery: false
    }
  }
};
//  解决移动端适配问题  // 网址 :https://blog.csdn.net/Cookysurongbin/article/details/99671673
// 1.   npm install postcss-px-to-viewport --save-dev
// 2.   "postcss-px-to-viewport": {
//   viewportWidth: 320,
//   viewportHeight: 568,
//   unitPrecision: 5,
//   viewportUnit: 'vw',
//   selectorBlackList: [],
//   minPixelValue: 1,
//   mediaQuery: false
// }
//  但是我发现，iphone6/7/8出来的效果，正好是预想的一半。
