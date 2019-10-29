import React from "react";
import { BrowserRouter as Router,Route } from "react-router-dom";
import Login from "./components/Auth/Login";
import Home from "./components/Home/home";
// import Reminder from "./components/Reminder/reminder";
import TaskList from "./components/TaskList/taskList";
import TaskForm from './components/Task/taskForm';
import Register from "./components/Auth/Register";
import GuestRoute from "./components/GuestRoute";
import AuthRoute from "./components/AuthRoute";
import Layout from "./components/Layout";

function App() {
  return (
    <Router>
      <Layout>
        <div className="bg-gray-300 h-screen">
          <GuestRoute path="/login" component={Login} />
          <GuestRoute path="/register" component={Register} />
          <AuthRoute path="/task" component={TaskForm} />
          <AuthRoute path="/taskList" component={TaskList} />
          {/* <AuthRoute path="/reminder" component={Reminder} /> */}
          <AuthRoute path="/home" component={Home} />
        </div>
        <Route path="/" exact component={Home} />
      </Layout>
    </Router>
  );
}

export default App;