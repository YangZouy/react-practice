// 补充了actionCreator
// 主要定义了操作的类型并且进行暴露

import { DECREMENT, INCREMENT } from "./constant"
import store from "./store"

export const createIncrementAction = (data) => ({type:INCREMENT,data})
export const createDecrementAction = (data) => ({type:DECREMENT,data})
// 这里是异步action 与一般action的区别就是它返回的是一个函数
export const createIncreamentAsyncAction = (data) => {
  return () => {
    setTimeout(()=>{
      store.dispatch(createIncrementAction(data));
    },500)
  }
}