import React, {FC, useEffect, useState} from 'react';
import cs from "./CreateTodo.module.scss";
import {ICreateTodoEvents, ICreateTodoStyles} from "../../types/types";

interface CreateTodoProps {
    createTodo: Function
}

const CreateTodo: FC<CreateTodoProps> = ({createTodo}) => {
    const [inputValue, setInputValue] = useState<string>('');
    const [style, setStyle] =  useState<ICreateTodoStyles>({
        inputStyle: ``,
        btnStyle: ``,
    });
    const [events, setEvents] = useState<ICreateTodoEvents>({
        hover: false,
        focus: false,
    });

    const addNewTodo = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        const newTodo = {
            id: Date.now(),
            title: inputValue,
            completed: false
        }
        createTodo(newTodo);
        setInputValue('');
    }

    useEffect(() => {
        if (events.hover && !events.focus && !inputValue) {
            setStyle({inputStyle:`${cs.my_input__hover}`, btnStyle: `${cs.my_btn__hover}`});
        } else if (events.focus || inputValue) {
            setStyle({...style, btnStyle: `${cs.my_btn__focus}`});
        } else {
            setStyle({inputStyle: ``, btnStyle: ``});
        }
    }, [events.focus, events.hover, inputValue])

    return (
        <form action="">
            <input
                className={cs.my_input + ' ' + style.inputStyle}
                placeholder="Добавить задачу"
                onMouseEnter={() => setEvents({...events, hover: true})}
                onMouseLeave={() => setEvents({...events, hover: false})}
                onFocus={() => setEvents({...events, focus: true})}
                onBlur={() => setEvents({...events, focus: false})}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value)}
                value={inputValue}
                type="text"/>
            <button
                className={cs.my_btn + ' ' + style.btnStyle}
                onMouseEnter={() => setEvents({...events, hover: true})}
                onMouseLeave={() => setEvents({...events, hover: false})}
                onClick={addNewTodo}
            >
                Создать задачу
            </button>
        </form>
    );
};

export default CreateTodo;