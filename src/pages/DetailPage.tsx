import { Todo } from "../types/Todo";
import { useLocation } from "react-router-dom";
import Modal from "react-modal";
import { UpdateModal } from "../components/UpdateModal";
import React from "react";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

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
                <Grid container spacing={2} fontSize={30} m={2}>
                    <Grid item>
                        {state.todo.title}
                    </Grid>
                    <Grid item>
                        <Button variant="outlined" onClick={() => setIsUpdateOpen(true)}>編集</Button>
                    </Grid>
                    <Modal isOpen={IsUpdateModalOpen}>
                        <UpdateModal todo={state.todo} buttonText="編集" changeIsOpen={changeIsOpen} />
                    </Modal>
                </Grid>
                <Box pl={4} pt={8} fontSize={20}>
                    <div dangerouslySetInnerHTML={{ __html: text }} />
                </Box>
            </Box>
        </>
    )
}