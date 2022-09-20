import { FC } from "react"


type Props = {
    setKeyword: (keyword: string) => void
}
//Todoリストのフィルタリング
export const SearchKeyword: FC<Props> = ({ setKeyword }) => {
    return (
        <>
            <input
                type="text"
                onChange={(event) => setKeyword(event.target.value)}
            />
        </>
    );
};
