import TodoItem from "components/TodoItem";
import { useTodosContext } from "context/TodosContext";

const TodosList = (/*{todosProps, handleChange, delTodo, setUpdate}*/) =>
{  

    // Use Context reads data from context db (bypassing the need for prop drilling)
    // Normal way to read data from db const value = useContext(TodosContext);
    // Simplistic way to read specified data from the db:
    const {todos} = useTodosContext();

    // We can use prop destructuring to obtain the data of props:
    // const {todosProps} = props; or even {todoProps} as the arg in the function above
    return (
        <ul>
            {
                /*React requires that a key be implemented for each item in a list, therefore key = {todo.id}*/
                todos.map((todo) => (<TodoItem key={todo.id} itemProp={todo} />))
            }
        </ul>
    );
}
export default TodosList;