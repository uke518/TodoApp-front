import React from "react";
import { TodoList } from "../components/List";
import { AddModal } from "../components/AddModal";
import { SearchKeyword } from "../components/SearchKeyword";
import { useTodo } from "../hooks/useTodo";
import Modal from "react-modal";

Modal.setAppElement("#root");

export const MainPage = () => {
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const [keyword, setFilter] = React.useState<string>("");
    const changeSetFilter = (keyword: string) => {
        setFilter(keyword)
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
                    <SearchKeyword keyword={keyword} setFilter={changeSetFilter} />
                    <button onClick={() => setIsOpen(true)}>追加</button>
                    <Modal isOpen={modalIsOpen}>
                        <AddModal buttonText="作成" changeIsOpen={changeIsOpen} />
                    </Modal>
                    <TodoList todoList={todoList} deleteItem={deleteItem} keyword={keyword} />
                </>
            </div>

        </div>

    );
}

export default MainPage;