export interface ITodo {
    id: number;
    title: string;
    completed: boolean;
}

export interface ICreateTodoStyles {
    inputStyle: string;
    btnStyle: string;
}

export interface ICreateTodoEvents {
    hover: boolean;
    focus: boolean;
}