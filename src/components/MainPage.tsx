import React from "react";
import { TodoList } from "./TodoList";
import { TodoAdd } from "./TodoAdd";
import { TodoFilter } from "./TodoFilter";
import { useTodo } from "../hooks/useTodo";
import Modal from "react-modal";

Modal.setAppElement("#root");

export const MainPage = () => {
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const [filter, setFilter] = React.useState<string>("");
    const changeSetFilter = (filter: string) => {
        setFilter(filter)
    }
    const changeIsOpen = (isOpen: boolean) => {
        setIsOpen(isOpen)
    }
    const { todoList, AddItem, deleteItem } = useTodo();
    return (
        <div className="TodoApp">
            <div>
                <h1>Todoリスト</h1>
                <>
                    <TodoFilter filter={filter} setFilter={changeSetFilter} />
                    <button onClick={() => setIsOpen(true)}>追加</button>
                    <Modal isOpen={modalIsOpen}>
                        <TodoAdd buttonText="作成" changeIsOpen={changeIsOpen} />
                    </Modal>
                    <TodoList todoList={todoList} deleteItem={deleteItem} filter={filter} />
                </>
            </div>

        </div>

    );
}

export default MainPage;