import { Todo } from "../types/Todo";
import { Link } from "react-router-dom";
import { FC } from "react"

type Props = {
    todo: Todo
    deleteItem: (id: string) => void
}

// 1つのTodo、内容と移動・削除ボタン
export const Item: FC<Props> = ({ todo, deleteItem }) => {
    // onClickイベントが発生したら、useTodoフックを呼び出す
    const handleDeleteItem = () => deleteItem(todo.id);

    //{todo.title}にaタグつけるとエラー出るのなんで？
    return (
        <>
            <Link to={`/${todo.id}`} state={{ todo: todo }}>
                {todo.title}
            </Link>
            <button onClick={handleDeleteItem}>削除</button>
        </>
    );
};
