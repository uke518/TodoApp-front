import { FC, } from 'react'
import React from "react";
import { Todo } from "../types/Todo"
import { useTodo } from "../hooks/useTodo";

type Props = {
    todo: Todo
    buttonText: string
    changeIsOpen: (IsOpen: boolean) => void
}

export const TodoUpdate: FC<Props> = ({ todo, buttonText, changeIsOpen }) => {
    const { updateItem, todoList, AddItem, deleteItem } = useTodo();
    const [title, setTitle] = React.useState<string>(todo.title);
    const [content, setContent] = React.useState<string>(todo.content);
    const UpdateAndCloseModal = () => {
        todo.title = title;
        todo.content = content;
        updateItem(todo.id, todo)
        changeIsOpen(false)
    }
    return (
        <>
            <form className="InputForm">
                <div className="Title">
                    <h1>タイトル</h1>
                    <input
                        type="text"
                        value={title}
                        onChange={(event) => setTitle(event.target.value)}
                    />
                </div>
                <div className="Content">
                    <h2>詳細</h2>
                    <input type="text"
                        value={content}
                        onChange={(event) => setContent(event.target.value)}
                    />
                </div>
                <div className="PostForm">
                    <button type="button" onClick={() => UpdateAndCloseModal()}>{buttonText}</button>
                    <button type="button" onClick={() => changeIsOpen(false)}>破棄</button>
                </div>
            </form>
        </>
    );
};
