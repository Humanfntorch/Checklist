import React from 'react';
import ReactDOM from 'react-dom/client';
// NOTE: Container objects must begin with capital letters. Use PascalCase for jsx containers!
import TodoApp from "components/TodoApp";
// Allows routing to another webpage
import { BrowserRouter } from 'react-router-dom';


const rootEl = document.getElementById("root");
const root = ReactDOM.createRoot(rootEl);

root.render(
    // Strict mode helps enforce best practices are used throughout devolopment.
    // Kinda like turning on all flags in C and ensuring everything is clean/cleared for deployment.
    // Note: Can be turned on in specific areas by wrapping that component, this ensures the entire project is under strict mode.
    <React.StrictMode>
        <BrowserRouter>
            <TodoApp />
        </BrowserRouter>
    </React.StrictMode>
);
    

/* A prop is like a static field that is immutable. If a parent passes the prop to the child,
 than the child will assume the same static field (meaning it is shared between all connected components).
 A state is a non-static and local field specific to the component that it is declared in.
 */
