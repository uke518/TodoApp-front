import { FC } from "react"


type Props = {
    keyword: string
    setKeyword: (keyword: string) => void
}
//Todoリストのフィルタリング
export const SearchKeyword: FC<Props> = ({ keyword, setKeyword }) => {
    return (
        <>
            <input
                type="text"
                value={keyword}
                onChange={(event) => setKeyword(event.target.value)}
            />
        </>
    );
};
