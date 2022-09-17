import React from "react";
import { FC } from "react"


type Props = {
    filter:string
    setFilter:(filter:string)=>void
}
//Todoリストのフィルタリング
export const TodoFilter:FC<Props> = ({filter,setFilter}) => {
    return (
        <>
            <input
                type="text"
                value={filter}
                onChange={(event) => setFilter(event.target.value)}
            />
        </>
    );
};
