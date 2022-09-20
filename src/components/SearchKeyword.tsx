import { FC } from "react"
import TextField from '@mui/material/TextField';

type Props = {
    setKeyword: (keyword: string) => void
}
//Todoリストのフィルタリング
export const SearchKeyword: FC<Props> = ({ setKeyword }) => {
    return (
        <>
            <TextField
                defaultValue=""
                label="検索"
                variant="outlined"
                onChange={(event) => setKeyword(event.target.value)}
                style={{ width: 540 }}
            />
        </>
    );
};
