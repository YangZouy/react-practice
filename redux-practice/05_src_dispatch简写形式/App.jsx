import React, { Component } from 'react'
import Count from './containers/Count'
import store from'./redux/store'

export default class App extends Component {
  render() {
    return (
      // 这里不是引入UI组件 而是引入容器组件 容器与UI是父子关系
      // 只要渲染了容器组件 UI组件也会被渲染的
      <div><Count store={store}/></div>
    )
  }
}
