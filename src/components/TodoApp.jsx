import { Routes, Route } from "react-router-dom";
import Home from "routes/Home";
import About from "routes/About";
import Login from "routes/Login";
import Profile from "routes/Profile";
import NotMatch from "routes/NotMatch";
import Layout from "components/Layout";
import SinglePage from "routes/SinglePage";
import ProtectedRoute from "./ProtectedRoute";

/*
import ReactDOM from 'react-dom/client';
// NOTE: Container objects must begin with capital letters. Use PascalCase for jsx containers!

import TodoList from 'components/todoList';
import Navbar from 'components/Navbar';
import Modal from "components/Modal";
import UncontrolledForm from "components/UncontrolledForm";
import ControlledForm from 'components/ControlledForm';
*/


const TodoApp = () =>
{
    return (
        <Routes>
            <Route path="/" element={<Layout />} >
            <Route index element = {<Home />} />
                <Route path="about" element={<About />} >
                <Route path=":slug" element={<SinglePage />} />
                </Route>
                <Route path="login" element={<Login />} />
                <Route path="profile" element={<ProtectedRoute> <Profile /> </ProtectedRoute>} />
                <Route path="*" element={<NotMatch />} />
            </Route>
        </Routes>
    );
}
export default TodoApp;