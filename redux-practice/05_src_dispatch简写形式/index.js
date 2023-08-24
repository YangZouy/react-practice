import React from "react";
import ReactDOM from 'react-dom/client';
import App from "./App";
import store from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// redux更新了数据但是react不会进行自动更新 所以需要render
// 进行监听 每个组件挂载完毕之后进行监听
// 但是如果组件太多 则可以直接在index.js中进行监听

store.subscribe( () => {
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
})