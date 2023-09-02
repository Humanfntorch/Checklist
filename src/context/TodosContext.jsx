// import { createContext } from "react";
// We are exporting the useContext function from the provider store for simplicity (rather than importing useContext in every file that needs it)
import { createContext, useContext, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";


const TodosContext = createContext(null);

export const TodosProvider = ({ children }) =>
{   

    const [todos, setTodos] = useState(getInitialTodos());

    /* Handles the updating for the checkbox on each task.
        Creates a shallow copy on the matching id condition, updates
        the element to opposite of current checkbox state and returns 
        that array to react. Otherwise, returns the current array state for each task.
    */
    const handleChange = (id) =>
    {
        setTodos((prevState) =>
            prevState.map((todo) =>
            {
                if (todo.id === id)
                {
                    return {
                        ...todo, completed: !todo.completed,
                    };
                }
                return todo;
            })
        );
    };

    /*
        Handles the deletion of a task on the condition of button press (delete)
    */ 
    const delTodo = (id) =>
    {
        setTodos([
            ...todos.filter((todo) =>
            {
                return todo.id !== id;
            }),
        ]);
    };

    // Allows user to add a new task on submit. uuidv4() generates a random and unique id for each task.
    const addTodoItem = (title) =>
    {
        const newTodo = {
            id: uuidv4(),
            title: title,
            completed: false,
        };
        setTodos([...todos, newTodo]);
    };

    /*
        Updates the task items title on edit. Immediately defaults task to false.
    */
    const setUpdate = (updatedTitle, id) =>
    {
        setTodos((prevState) =>
            prevState.map((todo) =>
            {
                if (todo.id === id)
                {
                    return {
                        ...todo, title: updatedTitle, completed: false,
                    };
                }
                return todo;
            })
        );
    }

    /*
        useEffect handles the storing of check-list data in browser's local storage,
        allows for fetching of prior saved data on refreshing the page.
    */
    useEffect(() =>
    {
        const tempTodos = JSON.stringify(todos);
        localStorage.setItem("todos", tempTodos);
    }, [todos]);


    return (
        <TodosContext.Provider value={{todos, handleChange, delTodo, addTodoItem, setUpdate}}>
            {children}
        </TodosContext.Provider>
    );
}

/*
    Helper function to retrieve saved state values for all items in check-list (saved) to local storage.
    Sets the state values to retrieved values from storage.
*/
function getInitialTodos()
{
    const tempTodos = localStorage.getItem("todos");
    const savedTodos = JSON.parse(tempTodos);
    return savedTodos || [];
}


export const useTodosContext = () => useContext(TodosContext);