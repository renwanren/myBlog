import React from 'react';
import ReactDom from 'react-dom';
import IndexPage from "./pages/IndexPage";
// import "./pages/todoList/styles/list.css";

console.log(document.getElementById('root'))
ReactDom.render(
    <IndexPage />,
    document.getElementById('root')
  );