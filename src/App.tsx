import React, {useEffect, useState} from 'react';
import './App.css';
import Header from "./components/Header/Header";
import logo from "./img/logo192.png";
import {ITodo} from "./types/types";
import TodoService from "./API/TodoService";
import TodoList from "./components/TodoList/TodoList";
import CreateTodo from "./components/CreateTodo/CreateTodo";
import {create} from "domain";

function App() {
    const [todos, setTodos] = useState<ITodo[]>([]);

    useEffect(() => {
        TodoService.getTodos().then((res) => setTodos(res!))
    }, []);

    const createTodo = (todo:ITodo) =>  {
        setTodos([todo, ...todos]);
    }

    return (
        <div className="App">
            <Header title='Tasks' logo={logo}/>
            <div className="container">
                <CreateTodo createTodo={createTodo}/>
                <TodoList todos={todos} title="Список задач"/>
            </div>
        </div>
    );
}

export default App;
