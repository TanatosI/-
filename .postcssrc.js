// 配置 yarn add postcss-pxtorem
// 所有 postcss 的插件都是函数
const pxToRem = require('postcss-pxtorem') // 引入postcss
module.exports = {
  // 插件↓
  plugins: [
    // 配置项↓
    pxToRem({
      // 根节点字体大小，一般情况都是375/1视口
      // 如果是vant 则是 37.5 ，自己的代码 是75
      rootValue: ({ file }) => (/vant/.test(file) ? 37.5 : 75),
      propList: ['*'] // 将所有的属性都转成rem
    })
  ]
}
