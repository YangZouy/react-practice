import React, { Component } from 'react'
import Search from './components/Search'
import List from './components/List'

export default class App extends Component {

  // 同理 还是将数据保存在App中 便于数据的传递
  state = {
    personObj: [],
    // 因为开始展示时list部分为空 
    // 这里需要根据不同的状态显示不同的内容
    // 是否是初次展示
    isFirst: true,
    // 是否正在加载
    isLoading: false,
    // 是否发生错误
    err: ''
  }

  // 添加数据
  // addPerson = (personObj) => {
  //   const per = this.state.personObj;
  //   // 添加到原来的数据中去
  //   const newPer = [...per,...personObj]
  //   // 进行更新 
  //   this.setState({personObj: newPer})
  // }

  // 不同状态 拿到不同的数据进行展示
  updateAppState = (personObj) => {
    this.setState(personObj)
  }
	render() {
		return (
			<div className="container">
				<Search updateAppState={this.updateAppState} />
        {/* 将从search中拿到的数据传递给List组件 */}
				<List {...this.state}/>
			</div>
		)
	}
}
