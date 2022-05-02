import React, {FC, useEffect, useState} from 'react';
import {ITodo} from "../../types/types";
import cs from "./TodoItem.module.scss";

interface TodoItemProps {
    todo: ITodo,
    active: boolean,
    setActive: Function,
    prover: string,
    setProver: Function,
}


const TodoItem: FC<TodoItemProps> = ({todo, setProver,prover}) => {
    const [check, setCheck] = useState<boolean>(false);
    const [itemStyle, setItemStyle] = useState<string>(`${cs.item}`);


    return (
        <div className={cs.item} id={todo.id.toString()} onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
            setProver((e.target as HTMLDivElement).attributes[1].value) // Пофиксить т.к. обращение по ключу [1] может привести к ошибке
        }}>
            <span
                style={{textDecoration: check ? 'line-through' : ''}}
                onClick={(e) => e.stopPropagation()}
            >
                {todo.title}
            </span>
            <input
                type="checkbox"
                className={cs.checkbox}
                id={todo.id.toString()}
                checked={check}
                onChange={(e) => setCheck(e.target.checked)}
            />
            <label htmlFor={todo.id.toString()} >
            </label>
            {prover === todo.id.toString() ?
                <div>
                    <textarea placeholder="Описание"/>
                    <input type="file"/>
                    <input type="date"/>
                    <div>Категории</div>
                </div> :
                <div className={cs.none}>

                </div>}

        </div>
    );
};

export default TodoItem;