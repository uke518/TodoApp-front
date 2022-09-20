import { FC, } from 'react'
import React from "react";
import { Todo } from "../types/Todo"
import { useTodo } from "../hooks/useTodo";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';

type Props = {
    todo: Todo
    buttonText: string
    changeIsOpen: (IsOpen: boolean) => void
}

const defaultProps = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    height: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
}

export const UpdateModal: FC<Props> = ({ todo, buttonText, changeIsOpen }) => {
    const { updateItem } = useTodo();
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
            <form>
                <Box sx={defaultProps}>
                    <Box m={3}>
                        <Typography variant="h6" component="h2">
                            タイトル
                        </Typography>
                        <TextField
                            defaultValue={title}
                            variant="outlined"
                            onChange={(event) => setTitle(event.target.value)}
                            style={{ width: 540 }}
                        />
                    </Box>
                    <Box m={3}>
                        <Typography>
                            詳細
                        </Typography>
                        <TextField
                            defaultValue={content}
                            variant="outlined"
                            onChange={(event) => setContent(event.target.value)}
                            style={{ width: 540 }}
                            multiline
                            rows={4}
                        />
                    </Box>
                    <Grid container display="flex" justifyContent="flex-end">
                        <Grid item >
                            <Button type="button" variant="contained" onClick={() => UpdateAndCloseModal()}>{buttonText}</Button>
                        </Grid>
                        <Grid item>
                            <Button type="button" onClick={() => changeIsOpen(false)}>破棄</Button>
                        </Grid>
                    </Grid>
                </Box>
            </form>
        </>
    );
};
