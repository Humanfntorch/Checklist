import React from 'react';
import Header from "components/Header";
import "styles/app.css";
import TodosLogic from 'components/TodosLogic';

/*
import ReactDOM from 'react-dom/client';
// NOTE: Container objects must begin with capital letters. Use PascalCase for jsx containers!

import TodoList from 'components/todoList';
import Navbar from 'components/Navbar';
import Modal from "components/Modal";
import UncontrolledForm from "components/UncontrolledForm";
import ControlledForm from 'components/ControlledForm';
*/


const Home = () =>
{
    return (
        //<div className='wrapper'>
            <div className="todos">
                <Header>
                    <h1>Task List</h1>
                    <p>Manage your time efficiently!</p>
                </Header>
                <TodosLogic />
            </div>
        //</div>
    );
}
export default Home;