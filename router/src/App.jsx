import './App.css';
// 该库脚手架并不会自动帮我们下载，因此需要自己之后安装
// 且因为该库比较大，需要按需引入
import {Switch,Route,Redirect} from 'react-router-dom'
// 引入组件
import About from './components/About';
import Home from './components/Home';
import MyNavLink from './components/MyNavLink/MyNavLink';

function App() {
  return (
    <div className="App">
      <div>
        <div className="row">
          <div className="col-xs-offset-2 col-xs-8">
            <div className="page-header"><h2>React Router Demo</h2></div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">
              {/* <a className="list-group-item active" href="./about.html">About</a>
              <a className="list-group-item" href="./home.html">Home</a> */}

              {/* 开始编写路由链接 */}
              {/* <NavLink className='list-group-item' to='/about'>About</NavLink>
              <NavLink className='list-group-item' to='/home'>Home</NavLink> */}
              {/* 下面使用自己封装的路由链接标签 */}
              {/* 它是一般组件 使用props进行传值 */}
              <MyNavLink to='/about'>About</MyNavLink>
              <MyNavLink to='/home'>Home</MyNavLink>
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                {/* 注册路由 */}
                {/* 为了提高性能 使用switch */}
                <Switch>
                  <Route path='/about' component={About}></Route>
                  <Route path='/home' component={Home}></Route>
                  <Redirect to='/about'></Redirect>
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
