import React, { Component } from 'react'
import News from './News/News'
import {Switch,Route,Redirect} from 'react-router-dom'
import Messages from './Messages/Messages'
import MyNavLink from '../MyNavLink/MyNavLink'

export default class Home extends Component {
  render() {
    return (
      <div>
        <h3>我是Home的内容</h3>
        <div>
          <ul className="nav nav-tabs">
            <li>
              <MyNavLink to='home/news'>News</MyNavLink>
            </li>
            <li>
              <MyNavLink to='/home/messages'>Messages</MyNavLink>
            </li>
          </ul>
          <Switch>
            <Route path='/home/news' component={News}></Route>
            <Route path='/home/messages' component={Messages}></Route>
            <Redirect to='/home/news'></Redirect>
          </Switch>
        </div>
      </div>
    )
  }
}
