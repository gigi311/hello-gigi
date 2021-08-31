
// src/index.js
// 导入组件，组件必须声明 name
import demoGigi from './src/demo-gigi'
 
// 为组件提供 install 安装方法，供按需引入
demoGigi.install = function (Vue) {
 Vue.component(demoGigi.name, demoGigi)
}
// 默认导出组件
export default demoGigi