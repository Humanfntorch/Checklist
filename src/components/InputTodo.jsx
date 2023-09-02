import { useState } from "react";
import { MdOutlineAddTask } from "react-icons/md";
import { useTodosContext } from "context/TodosContext";

const InputTodo = (/*{addTodoItem}*/) =>
{
    // Import  from context store rather than from prop drilling
    const { addTodoItem } = useTodosContext();

    // title for task
    const [title, setTitle] = useState("");
    // warning message for empty task
    const [message, setMessage] = useState("");
    
    // Sets the title of the task using callback
    const handleChange = (e) =>
    {
        setTitle(e.target.value);
    };

    // Submits task on enter, if invalid (empty string) prompts a warning message
    const handleSubmit = (e) =>
    {
        e.preventDefault();
        if (title.trim())
        {
            addTodoItem(title);
            setTitle("");
        }
        else
        {
            setMessage("Warning! Empty task detected, please input a real task.")
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit} className="form-container"> 
                <input type="text" placeholder="Add item..." value={title} onChange={handleChange} className="input-text"/>
                <button className="input-submit"> <MdOutlineAddTask/> </button>
            </form>
            <span className="submit-warning">{message}</span>
        </>
    );
}
export default InputTodo;