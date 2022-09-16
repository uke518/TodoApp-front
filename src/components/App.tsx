import { TodoList } from "./TodoList";
import { AddButton } from "./TodoAdd";
import { TodoFilter } from "./TodoFilter";
import { useTodo } from "../hooks/useTodo";
import { Todo } from "../types/Todo";
import { FC } from 'react'

type Props = {
  todoList: Todo[]
  addTodoListItem: () => void
  deleteTodoListItem: () => void
}

const Page: FC<Props> = ({ todoList, addTodoListItem, deleteTodoListItem }) => {
  return (
    <div className="TodoApp">
      <div>
        <h1>Todoリスト</h1>
        <>
          <TodoFilter />
          <AddButton buttonText="+ TODOを追加" AddItem={addTodoListItem} />
          <TodoList todoList={todoList} deleteTodoListItem={deleteTodoListItem} />
        </>
      </div>

    </div>
  )
}

function App() {
  const { todoList, addTodoListItem, deleteTodoListItem } = useTodo();
  return (
    <Page todoList={todoList} addTodoListItem={addTodoListItem} deleteTodoListItem={deleteTodoListItem} />
  );
}

export default App;