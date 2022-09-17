import { FC } from 'react'
import { useTodo } from "../hooks/useTodo";
import React from "react";

type Props = {
    buttonText: string
    changeIsOpen: (IsOpen: boolean) => void
}
export const TodoAdd: FC<Props> = ({ buttonText, changeIsOpen }) => {
    const { todoList, AddItem, deleteItem } = useTodo();
    const [title, setTitle] = React.useState<string>("");
    const [content, setContent] = React.useState<string>("");
    const handleAddItem = () => {
        AddItem(title, content);
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
                    <input
                        type="text"
                        value={content}
                        onChange={(event) => setContent(event.target.value)}
                    />
                </div>
                <div className="PostForm">
                    <button onClick={handleAddItem}>{buttonText}</button>
                    <button type="button" onClick={() => changeIsOpen(false)}>破棄</button>
                </div>
            </form>
        </>
    );
};
