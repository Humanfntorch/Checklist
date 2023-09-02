import InputTodo from "components/InputTodo";
import TodosList from "components/TodosList";
import { TodosProvider } from "context/TodosContext";

const TodosLogic = () =>
{
    
    return (
        // ul = unorder list
        // If we wrap code in {}, we can use generic javascript instead of jsx
        /*
            We wrap the InputTodo and TodosList in the TodosProvider (contextProvider interface)
            which allows these props (and further descendants) to access the data store in the contextProvider db.
            All of the initial state(s), effects, hooks and general logic is moved to the context provider, rather than here.
        */
        <TodosProvider>
            <InputTodo />
            <TodosList />
        </TodosProvider>
         
        /*
            The following shows how prop drilling is applied.

            <InputTodo addTodoItem={addTodoItem} />
            {/*passing todos data to TodosList via props (props drilling)*/ /*}
            
            <TodosList todosProps={todos} handleChange={handleChange} delTodo={delTodo} setUpdate={setUpdate} />
        */
    );
};

export default TodosLogic;