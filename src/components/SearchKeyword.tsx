import { FC } from "react"


type Props = {
    keyword: string
    setFilter: (keyword: string) => void
}
//Todoリストのフィルタリング
export const SearchKeyword: FC<Props> = ({ keyword, setFilter }) => {
    return (
        <>
            <input
                type="text"
                value={keyword}
                onChange={(event) => setFilter(event.target.value)}
            />
        </>
    );
};
