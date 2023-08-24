// 这里是Count的容器组件 这部分组件不需要自己写 
// 主要是采用下载的react-redux库来进行编写
// 容器组件主要是与UI组件和redux进行交互的
// 因此需要首先引入这两部分

import CountUI from '../../components/Count'
import { connect } from 'react-redux'
import {createIncreamentAsyncAction,createIncrementAction,createDecrementAction} from './../../redux/count_action'


// 与UI交互主要靠的是父子之间传值 props
// 与redux传值主要是靠store
// 下面两个函数的返回值都是对象

function mapStateToProps(state) {
  // 从redux中获取到状态
  // 将状态传递给UI组件
  return {count: state}
}

function mapDispatchToProps(dispatch) {
  return {
    // 获取到数据之后需要调用dispatch把action给store 然后store操作reducer
    jia: (num)=>{dispatch(createIncrementAction(num))},
    jian: (num)=>{dispatch(createDecrementAction(num))},
    jiaAsync: (num)=>{dispatch(createIncreamentAsyncAction(num))}
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(CountUI);