import React from "react";
import { TodoList } from "../components/List";
import { AddModal } from "../components/AddModal";
import { SearchKeyword } from "../components/SearchKeyword";
import { useTodo } from "../hooks/useTodo";
import Modal from "react-modal";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

Modal.setAppElement("#root");

const defaultBoxProps = {
    bgcolor: 'background.paper',
    m: 1,
    py: 1,
    style: { width: '33rem', height: '3rem' },
    fontFamily: "Monospace",
    display: "flex",
};

export const MainPage = () => {
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const [keyword, setKeyword] = React.useState<string>("");
    const changeKeyword = (keyword: string) => {
        setKeyword(keyword)
    }
    const changeIsOpen = (isOpen: boolean) => {
        setIsOpen(isOpen)
    }
    const { todoList, deleteItem } = useTodo();
    return (
        <div className="TodoApp">
            <Box {...defaultBoxProps} pl={2}>
                <h1>Todoリスト</h1>
            </Box>
            <SearchKeyword setKeyword={changeKeyword} />
            <Box {...defaultBoxProps} justifyContent="flex-end" mb={0}>
                <Button variant="outlined" onClick={() => setIsOpen(true)}>追加＋</Button>
            </Box>
            <Modal isOpen={modalIsOpen}>
                <AddModal buttonText="作成" changeIsOpen={changeIsOpen} />
            </Modal>
            <TodoList todoList={todoList} deleteItem={deleteItem} keyword={keyword} />
        </div>
    );
}

export default MainPage;