// 补充了actionCreator
// 主要定义了操作的类型并且进行暴露

import { DECREMENT, INCREMENT } from "./constant"

export const createIncrementAction = (data) => ({type:INCREMENT,data})
export const createDecrementAction = (data) => ({type:DECREMENT,data})