import React from "react";
import { useTodo } from "../hooks/useTodo";
import { MainPage } from "./MainPage";
import { DetailPage } from "./DetailPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"


function App() {
  const { todoList, AddItem, deleteItem } = useTodo();
  return (
    <Router>
      <Routes>
        <Route path={`/`} element={<MainPage />} />
        {todoList.map((todo) => (
          <Route path={`/${todo.id}`} element={<DetailPage />} key={todo.id} />
        ))}
      </Routes>
    </Router>
  );
}

export default App;