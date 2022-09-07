//import { TodoTitle } from "./TodoTitle";
import { TodoItem } from "./TodoItem";
import { Todo } from "../types/Todo";

// TodoItemをループして表示
// todoListが0件の場合、タイトルとTODOリストを表示しない
export const TodoList = ({
    todoList,
    deleteTodoListItem,
}: {
    todoList: Todo[];
    deleteTodoListItem: (id: string) => void;
}) => {
    return (
        <>
            {todoList.length !== 0 && (
                <>
                    <ul>
                        {todoList.map((todo) => (
                            <li key={todo.id}>
                                <TodoItem todo={todo} key={todo.id} deleteTodoListItem={deleteTodoListItem} />
                            </li>
                        ))}
                    </ul>
                </>
            )}
        </>
    );
};
