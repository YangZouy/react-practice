import React, { Component } from 'react'
import Details from './Details/Details'
import {Link,Switch,Route,Redirect} from 'react-router-dom'

export default class Messages extends Component {

  // 这里定义传送过去的信息
  state = { details: [
    {id: '001',title: 'message001', content: 'Have a nice day!'},
    {id: '002',title: 'message002', content: 'Have a nice day!'},
    {id: '003',title: 'message003', content: 'Have a nice day!'}
  ]}

  render() {
    // 拿到数据
    const {details} = this.state

    return (
      <div>
        <ul>
          {/* 下面的内容通过循环显示 */}
          {
            details.map((detail)=> {
              return (
                <li key={detail.id}>
                  {/* 使用params进行传参 */}
                  {/* <Link to={`/home/messages/details/${detail.id}/${detail.title}`}>{detail.title}</Link> */}
                  {/* 使用search进行传参 */}
                  <Link to={`/home/messages/details/?id=${detail.id}&title=${detail.title}`}>{detail.title}</Link>
                </li>
              )
            })
          }
        </ul>
        <hr />
        <h3>我是Detail的内容</h3>
        <Switch>
          {/* <Route path='/home/messages/details/:id/:title' component={Details}></Route> */}
          {/* 使用search */}
          <Route path='/home/messages/details' component={Details}></Route>
          <Redirect to='/home/messages/details'></Redirect>
        </Switch>
      </div>
    )
  }
}
