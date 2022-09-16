import axios from "axios";
import { Todo } from "../types/Todo";

const todoDataUrl = "http://127.0.0.1:8000/todos/";

// 全TODOリスト取得
export const getAllTodoData = async () => {
    const response = await axios.get(todoDataUrl);
    return response.data;
};

// 1件のTODOを追加する
export const addTodoData = async (todo: Todo) => {
    const response = await axios.post(todoDataUrl, todo);
    return response.data;
};

// 1件のTODOを削除する
export const deleteTodoData = async (id: string) => {
    await axios.delete(`${todoDataUrl}/${id}`);
    return id;
};

// 1件のTODOを更新する
export const updateTodoData = async (id: string, todo: Todo) => {
    const response = await axios.put(`${todoDataUrl}/${id}`, todo);
    return response.data;
};
