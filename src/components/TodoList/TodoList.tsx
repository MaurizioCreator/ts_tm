import React, {FC, useState} from 'react';
import {ITodo} from "../../types/types";
import {findAllByDisplayValue} from "@testing-library/react";
import cs from "./TodoList.module.scss";
import TodoItem from "../TodoItem/TodoItem";

interface TodoListProps {
    todos: ITodo[];
    title: string;
}

const TodoList:FC<TodoListProps> = ({title,todos}) => {
    const [active, setActive] = useState<boolean>(false);
    const [prover, setProver] = useState<string>('');

    function openDetails (taskId:string):void {
        setProver(taskId);
    }

    return (
            <div className={cs.container}>
                <div className={cs.item_container}>
                    {todos.map((todo) =>
                        <TodoItem
                            key={todo.id}
                            todo={todo}
                            active={active}
                            setActive={setActive}
                            prover={prover}
                            setProver={openDetails}
                        />
                    )}
                </div>
            </div>
    );
};

export default TodoList;