import { Todo } from "../types/Todo";
import { useLocation } from "react-router-dom";
import Modal from "react-modal";
import { TodoUpdate } from "../components/TodoUpdate";
import React from "react";

interface State {
    todo: Todo
}

export const DetailPage = () => {
    //todoItem.tsxからtodoの情報を取得
    const location = useLocation();
    const state = location.state as State;

    //Modal操作のための変数
    const [IsUpdateModalOpen, setIsUpdateOpen] = React.useState(false);
    const changeIsOpen = (updateModalIsOpen: boolean) => {
        setIsUpdateOpen(updateModalIsOpen)
    }
    return (
        <>
            <div>
                <div className="title">
                    {state.todo.title}
                    <button onClick={() => setIsUpdateOpen(true)}>編集</button>
                    <Modal isOpen={IsUpdateModalOpen}>
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