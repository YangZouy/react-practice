import React from "react";
import ReactDOM from 'react-dom/client';
import App from "./App";
import store from "./redux/store";
// 这里是对App中多个组件传store进行优化 
// 不用每个组件一一进行传递 而是统一进行传递

import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
  
);

// 这里react-redux自动实现了监测 不用我们自己调用render
// 属于优化部分
// store.subscribe( () => {
//   root.render(
//     <React.StrictMode>
//       <App />
//     </React.StrictMode>
//   );
// })