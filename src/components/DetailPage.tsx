import { Todo } from "../types/Todo";
import { useLocation } from "react-router-dom";
import Modal from "react-modal";
import { TodoUpdate } from "./TodoUpdate";
import React from "react";
import { updateItem } from "../hooks/useTodo"

interface State {
    todo: Todo
}

export const DetailPage = () => {
    //todoItem.tsxからtodoの情報を取得
    const location = useLocation();
    const state = location.state as State;
    console.log("location", location)

    //Modal操作のための変数
    const [updateModalIsOpen, setUpdateIsOpen] = React.useState(false);
    const changeIsOpen = (updateModalIsOpen: boolean) => {
        setUpdateIsOpen(updateModalIsOpen)
    }

    return (
        <>
            <div>
                <div className="title">
                    {state.todo.title}
                    <button onClick={() => setUpdateIsOpen(true)}>編集</button>
                    <Modal isOpen={updateModalIsOpen}>
                        <TodoUpdate todo={state.todo} buttonText="編集" changeIsOpen={changeIsOpen} />
                    </Modal>
                </div>
                <div className="content">
                    {state.todo.content}
                </div>
            </div>
        </>
    )
}