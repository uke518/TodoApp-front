import { TodoItem } from "./TodoItem";
import { Todo } from "../types/Todo";
import { FC } from "react"

type Props = {
    todoList: Todo[]
    deleteItem: (id: string) => void
    filter: string
}

// TodoItemをループして表示
// todoListが0件の場合、タイトルとTODOリストを表示しない
export const TodoList: FC<Props> = ({ todoList, deleteItem, filter }) => {
    return (
        <>
            {todoList.length !== 0 && (
                <>
                    <ul>
                        {todoList.map((todo) => (
                            <li key={todo.id}>
                                <TodoItem todo={todo} key={todo.id} deleteItem={deleteItem} />
                            </li>
                        )
                        )}
                    </ul>
                </>
            )}
        </>
    );
};
