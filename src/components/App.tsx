import { TodoList } from "./TodoList";
import { TodoAdd } from "./TodoAdd";
import { TodoFilter } from "./TodoFilter";
import { useTodo } from "../hooks/useTodo";

function App() {
  const { todoList, addTodoListItem, deleteTodoListItem } = useTodo();
  return (
    <div className="TodoApp">
      <div>
        <h1>Todoリスト</h1>
        <>
          <TodoFilter />
          <TodoAdd buttonText="+ TODOを追加" handleAddTodoListItem={addTodoListItem} />
          <TodoList todoList={todoList} deleteTodoListItem={deleteTodoListItem} />
        </>
      </div>

    </div>

  );
}

export default App;