import { Item } from "./Item";
import { Todo } from "../types/Todo";
import { FC } from "react";
import Stack from '@mui/material/Stack';

type Props = {
    todoList: Todo[]
    deleteItem: (id: string) => void
    keyword: string
}

// TodoItemをループして表示
// todoListが0件の場合、タイトルとTODOリストを表示しない
export const TodoList: FC<Props> = ({ todoList, deleteItem, keyword }) => {
    return (
        <>
            {todoList.length !== 0 && (
                <>
                    <Stack spacing={2}>
                        <ul>
                            {todoList.map((todo) => (
                                (todo.title.indexOf(keyword) > -1 || todo.content.indexOf(keyword) > -1) &&
                                (<li key={todo.id}>
                                    <Item todo={todo} key={todo.id} deleteItem={deleteItem} />
                                </li>)
                            )
                            )}
                        </ul>
                    </Stack>
                </>
            )}
        </>
    );
};
