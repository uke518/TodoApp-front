//もう使わないファイル！
import { Todo } from "../types/Todo";

export const TodoDetail = ({
    todo,
}: {
    todo: Todo;
}) => {
    return (
        <div>
            <div className="title">
                {todo.title}
                <button>編集</button>
            </div>
            <div className="content">
                {todo.content}
            </div>
        </div>
    )
}