// 推荐使用这种形式的初始化 便于后期的代码维护
// 只需要修改initState即可
const initState = 0;
// reducer 执行传过来的action动作 完成之后将store中的数据修改之后的值传回去
// 这里的preState其实就是需要的count值
export default function count_reducer(preState=initState,action) {
  const {type, data} = action
  // console.log(data)

  switch(type) {
    case 'increment':
      return preState + data;
    case 'decrement':
      return preState - data;
    // 注意 reducer里面不能做非常复杂的事情 
    // 故异步或者判断等逻辑需要放到别的地方
    default:
      // 这里其实就是对prestate进行一些初始化的内容
      // 因为前面已经使用了默认参数值的方式 故直接返回参数即可
      return preState;
  }
}