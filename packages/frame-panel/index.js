// 导入组件，组件必须声明 name
import FramePanel from './src/frame-panel'
 
// 为组件提供 install 安装方法，供按需引入
FramePanel.install = function (Vue) {
 Vue.component(FramePanel.name, FramePanel)
}
// 默认导出组件
export default FramePanel