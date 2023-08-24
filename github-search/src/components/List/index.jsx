import React, { Component } from 'react'
import './index.css'

export default class List extends Component {

	render() {
    const {isLoading, isFirst,err,personObj} = this.props
    
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
