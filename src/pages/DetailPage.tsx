import { Todo } from "../types/Todo";
import { useLocation } from "react-router-dom";
import Modal from "react-modal";
import { UpdateModal } from "../components/UpdateModal";
import React from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

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

    //改行を表示に反映
    const text = state.todo.content.replace(/\n/g, '<br />');
    return (
        <>
            <Box>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    p: 1,
                    m: 1,
                    bgcolor: 'background.paper',
                    borderRadius: 1,
                    justifyContent: 'space-between',
                    width: 530,
                }}>
                    <Typography variant="h4">{state.todo.title}</Typography>
                    <Button variant="outlined" onClick={() => setIsUpdateOpen(true)}>編集</Button>
                    <Modal isOpen={IsUpdateModalOpen}>
                        <UpdateModal todo={state.todo} buttonText="編集" changeIsOpen={changeIsOpen} />
                    </Modal>
                </Box>
                <Box pl={4} pt={8} fontSize={200}>
                    <Typography variant="h6" dangerouslySetInnerHTML={{ __html: text }} />
                </Box>
            </Box>
        </>
    )
}