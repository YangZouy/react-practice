import React, { Component } from 'react'
import './App.css'
import Footer from './components/Footer/Footer'
import Header  from './components/Header/Header'
import List from './components/List/List'

export default class App extends Component {
  state = {todos:[
    {id: '001', name: '吃饭', done: true},
    {id: '002', name: '睡觉', done: false},
    {id: '003', name: '打代码', done: true}
  ]}
  
  // 通过props传递过去函数，子组件调用函数后父组件拿到函数中的参数
  addTodo = (todoObj) => {
    // 这里的todoObj就是代办事项对象
    const todos = this.state.todos;
    // 将新的数据添加到所有数据中
    const todoObjs = [todoObj,...todos]
    // 修改原来的数据
    this.setState({todos: todoObjs});
    // 输入完成之后需要将输入框清空
  }

  // 这里实现的是修改todo的状态
  updateTodo = (id,done) => {
    // 这里类似是孙传祖的隔代传递 依旧使用自定义函数的形式 在子组件中调用这样的函数即可
    // 先获取到原来的代办列表
    const todos = this.state.todos;
    // 然后循环遍历 与id值符合的进行比较
    const newTodos = todos.map( (todo) => {
      if(todo.id === id) return {...todo,done}
      else return todo
    })

    this.setState({todos: newTodos})
  }

  // 删除某条todo
  deleteTodo = (id) => {
    const todos = this.state.todos
    const newTodos = todos.filter((todo) => {
      return todo.id !== id
    })
    // console.log(id)
    // 更改状态
    this.setState({todos: newTodos})
  }

  // 最后的checkedAll的操作 就是点击了最后的 上面所有的都要选择 否则所有的都不选择
  checkTodo = (done) => {
    const todos = this.state.todos
    const newTodos = todos.map((todo) => {
      return {...todo,done}
    })
    this.setState({todos: newTodos})
  }

  // 清除已完成任务
  clearTodo = () => {
    const todos = this.state.todos
    const newTodos = todos.filter((todo)=>{
      return todo.done !== true
    })
    this.setState({todos: newTodos})
  }
  render() {
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header addTodo={this.addTodo}/>
          <List todos={this.state} updateTodo={this.updateTodo} deleteTodo = {this.deleteTodo}/>
          <Footer todos={this.state} checkTodo={this.checkTodo} clearTodo={this.clearTodo} />
        </div>
      </div>
    )
  }
}
