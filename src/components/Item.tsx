import { Todo } from "../types/Todo";
import { Link } from "react-router-dom";
import { FC } from "react"
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

type Props = {
    todo: Todo
    deleteItem: (id: string) => void
}

const defaultProps = {
    bgcolor: 'background.paper',
    m: 1,
    py: "auto",
    pl: 2,
    style: { width: '30rem', height: '4rem' },
    border: 1,
    borderColor: 'text.primary',
    fontFamily: "Monospace",
    borderRadius: 16,
};

// 1つのTodo、内容と移動・削除ボタン
export const Item: FC<Props> = ({ todo, deleteItem }) => {
    // onClickイベントが発生したら、useTodoフックを呼び出す
    const handleDeleteItem = () => deleteItem(todo.id);

    //{todo.title}にaタグつけるとエラー出るのなんで？
    return (
        <>
            <Box {...defaultProps} mt={0}>
                <Grid container spacing={2} justifyContent='space-between'>
                    <Grid item fontSize={20}>
                        <Link to={`/${todo.id}`} state={{ todo: todo }}>
                            <p>{todo.title}</p>
                        </Link>
                    </Grid>
                    <Grid item m={2}>
                        <Button variant="contained" onClick={handleDeleteItem}>削除</Button>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
};