import { Todo } from "../types/Todo";
import { FC } from 'react'

type Props={
    todo: Todo
    deleteTodoListItem: (id: string) => void
}

// 1つのTodo、内容と移動・削除ボタン
export const TodoItem:FC<Props> = ({ todo, deleteTodoListItem }) => {
    // onClickイベントが発生したら、useTodoフックを呼び出す
    const DeleteTodoListItem = () => deleteTodoListItem(todo.id);

    return (
        <>
            {todo.value}
            <button onClick={DeleteTodoListItem}>削除</button>
        </>
    );
};
