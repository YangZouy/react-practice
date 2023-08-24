import React, { Component } from 'react'
import Count from './containers/Count'

export default class App extends Component {
  render() {
    return (
      // 这里不是引入UI组件 而是引入容器组件 容器与UI是父子关系
      // 只要渲染了容器组件 UI组件也会被渲染的
      // 这里不用传入store了在index.js中使用Provider 进行了统一传值
      <div><Count/></div>
    )
  }
}
