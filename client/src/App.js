import React from "react"
import TodoItem from "./components/TodoItem"
import todosData from "./todosData"
import { Button } from 'react-materialize';


class App extends React.Component {
    constructor() {
        super()
        this.state = {
            todos: todosData
        }
        this.handleChange = this.handleChange.bind(this)
    }
    
    handleChange(id) {
        this.setState(prevState => {
            const updatedTodos = prevState.todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed
                }
                return todo
            })
            return {
                todos: updatedTodos
            }
        })
    }
    
    render() {
        const todoItems = this.state.todos.map(item => 
        <TodoItem key={item.id} item={item} handleChange={this.handleChange}/>)
        return (
            <div className="todo-list">
                <h1>Title</h1>
                <a class="btn-floating btn-large waves-effect waves-light red"><i class="material-icons">add</i></a>

                {todoItems}
            </div>
        )    
    }
}

export default App