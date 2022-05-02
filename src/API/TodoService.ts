import axios from "axios";
import {ITodo} from "../types/types";
export const API_URL = 'https://jsonplaceholder.typicode.com/todos';

export default class TodoService {

    static async getTodos(limit:number = 10) {
        try {
            const response = await axios.get<ITodo[]>(API_URL, {
                params: {
                    _limit: limit,
                }
            });
            return response.data;
        } catch (e) {
            console.log(e);
        }
    }
}