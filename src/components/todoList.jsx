import React from "react";
import Header from "components/Header";
import TodosLogic from "./TodosLogic";


const TodoList = () =>
{
  // For some reason, the ( must appear after return. idk why
  return (
      // NOTE: When returning more than one object (h1, p), we need to wrap them in an enclosing tag (<div></div>).
      // if we want to avoid div, we can use React.Fragment (must import react) 
      <React.Fragment>
        <Header />
        <TodosLogic />
      </React.Fragment>
    );
}
  
export default TodoList;
  
/*
NOTE: The above syntax is essentially
assigning a variable to the function
and then allowing the export of the function to other files.
The equivalent code for this is:

function TodoList()
{
  return (
    <React.Fragment>
      <h1> Hellow World!</h1>
      <p> I am in a React Component!</p>
    </React.Fragment>
  );
};
export default TodoList;

*/
