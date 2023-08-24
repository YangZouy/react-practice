import React, { Component } from 'react'
import './index.css'
import PubSub from 'pubsub-js'

export default class List extends Component {

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

  componentDidMount() {
    // 开始订阅消息
    this.token = PubSub.subscribe('update', (_,data) => {
      this.setState(data)
    })
  }

  componentWillUnmount() {
    // 取消订阅消息
    PubSub.unsubscribe(this.token)
  }

	render() {
    const {isLoading, isFirst,err,personObj} = this.state
    
		return (
			<div className="row">
        {/* 开始遍历展示拿到的数据 */}
        {
          isFirst ? 'welcome to github search' :
          isLoading ? 'we are trying to loading...' :
          err ? {err} :
          personObj.map((per) => {
            return (
              <div className="card" key={per.id}>
                <a href={per.html_url} target="_blank" rel="noreferrer">
                  <img alt='head-pic' src={per.avatar_url} style={{width: '100px'}}/>
                </a>
                <p className="card-text">{per.login}</p>
              </div>
            )
          })
        }
			</div>
		)
	}
}
