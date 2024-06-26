import React, {useEffect, useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import TodoList from "./component/todo-list/TodoList";
import { faICursor } from '@fortawesome/free-solid-svg-icons'; 




//include images into your bundle
import rigoImage from "../img/rigo-baby.jpg";

//create your first component
const Layout = () => {
	 const [tasks, setTasks] = useState([]);
	 const [inputValue, setInputValue ] = useState("");
 
	 const handleInputChange = (e) => {
		 setInputValue(e.target.value);
	 };
 
	 const handleFormSubmit = (e) => {
		 e.preventDefault();
		 if (inputValue.trim()) {
			 setTasks([...tasks, inputValue]);
			 setInputValue("");
		 }
	 };
 
	 const removeTask = (index) => {
		 const newTasks = tasks.filter((_, i) => i !== index);
		 setTasks(newTasks);
	 };
	return (
		<>
			<div className="container">
				<div className="tittle">
				<h1>Your Todo List</h1>
				</div>
				<div className="myForm col-sm-2 justify-content-center mb-4">
				<form className="p-3 rounded-start col-lg-12 col-sm-4 col-md-8" onSubmit={handleFormSubmit}>
					<div className="input-group inputStyle">
					<input 
					type="text"
					className="form-control bg-dark text-light"
					id="textList"
					value = {inputValue}
					onChange={handleInputChange}
					placeholder="What needs to be done?" 
					/>
					<span className="input-group-text" id="basic-addon1"><FontAwesomeIcon icon={faICursor} /></span>
					</div>
				</form>
				</div>
					<TodoList tasks={tasks} removeTask={removeTask} />
			</div>
		</>
	);
};

export default Layout;
