import React, { Component } from 'react'
import qs from "qs"

const DetailData = [
	{id:'001',content:'你好，中国'},
	{id:'002',content:'你好，尚硅谷'},
	{id:'003',content:'你好，未来的自己'}
]

export default class Details extends Component {
  
  render() {
    // 通过params
    // const detail = this.props.match.params;
    // 通过search
    const detail = this.props.location.search;
    // console.log(detail) ?id=002&title=message002
    // 对detail数据进行处理 使用qs库对urlencoded编码方式进行解析
    const {id,title} = qs.parse(detail.slice(1))

    // 通过id然后在本地的内容中查找content进行展示
    const content = DetailData.find((data) => {
      return id === data.id
    })

    return (
      <div>
        Id: {id} <br/>
        Title: {title} <br/>
        Content: {content.content} <br/>
      </div>
    )
  }
}
