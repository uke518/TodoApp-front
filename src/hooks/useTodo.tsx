import { useState, useEffect } from 'react';
import { Todo } from "../types/Todo"
import * as todoData from "../apis/todo";
import { v4 as uuid } from "uuid";

export const useTodo = () => {
    const [todoList, setTodoList] = useState<Todo[]>([]);

    //todo一覧を取得
    useEffect(() => {
        todoData.getAllTodoData().then((todo: Todo[]) => {
            console.log("todo:", todo);
            setTodoList([...todo].reverse());
        });
    }, []);


    //追加
    const AddItem = (addTodoTitle: string, addTodoContent: string) => {
        const newTodo = { id: uuid, title: addTodoTitle, content: addTodoContent }
        todoData.addTodoData(newTodo).then((addTodo) => {
            setTodoList([addTodo, ...todoList]);
        });
    };

    //削除
    const deleteItem = (id: string) => {
        todoData.deleteTodoData(id).then((deletedid) => {
            const newTodoList = todoList.filter((item) => item.id !== deletedid);
            setTodoList(newTodoList);
        });
    };

    //更新
    const updateItem = (id: string, todo: Todo) => {
        todoData.updateTodoData(id, todo)
    }
    return { todoList, AddItem, deleteItem };
};

//更新
export const updateItem = (id: string, todo: Todo) => {
    todoData.updateTodoData(id, todo)
}
