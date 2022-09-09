import { useState } from "react";
import { Todo, mockTodoList } from "../types/Todo"
import "react-native-get-random-values";
//import { v4 as uuidv4 } from "uuid";


export const useTodo = () => {
    const [todoList, setTodoList] = useState<Todo[]>(mockTodoList);

    //追加
    const addTodoListItem = () => {
        setTodoList(mockTodoList);
    }

    //削除
    const deleteTodoListItem = () => {
        setTodoList([]);
    }

    return { todoList, addTodoListItem, deleteTodoListItem };
};

