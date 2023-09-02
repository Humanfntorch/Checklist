import { useState, useRef} from "react";
import styles from "styles/TodoItem.module.scss"
import { AiTwotoneEdit } from "react-icons/ai";
import { BsFillTrash3Fill } from "react-icons/bs";
import { useTodosContext } from "context/TodosContext";
import { useAuthContext } from "context/AuthContext";


const TodoItem = ({ itemProp}) => 
{   
    // Import global handlers from store
    const { handleChange, delTodo, setUpdate } = useTodosContext();
    // example of in-line css styling
    const completedStyle = {
        fontStyle: "italic",
        color: "#595959",
        opacity: 0.4,
        textDecoration: "line-through",
    };

    const { user } = useAuthContext();

    // State manages a boolean for when a user is in editing mode
    const [editing, setEditing] = useState(false);
    const handleEditing = () =>
    {
        setEditing(true);
    };

    // Normal checklist view
    let viewMode = {};
    // Editing task mode
    let editMode = {};
    // Controls which style mode the user is active in
    if (editing)
    {   
        // Hides OG display when editing
        viewMode.display = "none";
    }
    else
    {
        editMode.display = "none";
    }

    // ref to control when component element's title changes during editing
    const editInputRef = useRef(null);

    // Closes update input on enter 
    const handleUpdatedDone = (event) =>
    {
        if (event.key === "Enter")
        {   
            setUpdate(editInputRef.current.value, itemProp.id);
            setEditing(false);
        }
    };

    // Renders each component item in the list
    return (
        <li className={styles.item}>
            <div className={styles.content} style={viewMode}>
                <input type="checkbox" checked={itemProp.completed} onChange={() => handleChange(itemProp.id)} />
                {/* Hides edit button unless the user is signed in*/ }
                {user && (
                    <button className={styles["edit-submit"]} onClick={handleEditing}>
                        <AiTwotoneEdit />
                    </button>
                )}
                <button className={styles["delete-submit"]} onClick={() => delTodo(itemProp.id)}> <BsFillTrash3Fill/> </button>
                <span style={itemProp.completed ? completedStyle : null}>
                    {itemProp.title}
                </span>
            </div>
            <input type="text" ref={editInputRef} defaultValue={itemProp.title} className={styles.textInput} style={editMode}
                onKeyDown={handleUpdatedDone}
            />
        </li>
    );
}
export default TodoItem;
  