import { FC } from 'react'
import { useTodo } from "../hooks/useTodo";
import React from "react";
import { Todo } from "../types/Todo";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';

type Props = {
    todo?: Todo
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

export const AddModal: FC<Props> = ({ buttonText, changeIsOpen }) => {
    const { AddItem } = useTodo();
    const [title, setTitle] = React.useState<string>("");
    const [content, setContent] = React.useState<string>("");
    const handleAddItem = () => {
        AddItem(title, content);
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
                            defaultValue=""
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
                            defaultValue=""
                            variant="outlined"
                            onChange={(event) => setContent(event.target.value)}
                            style={{ width: 540 }}
                            multiline
                            rows={4}
                        />
                    </Box>
                    <Grid container display="flex" justifyContent="flex-end">
                        <Grid item >
                            <Button type="submit" variant="contained" onClick={handleAddItem}>{buttonText}</Button>
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
