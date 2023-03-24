import axios from "axios";

const TODO_URL = "https://minibacktodo-production.up.railway.app/tasks";


const getTodo = async () => {
    try {
      const res = await axios.get(TODO_URL);
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };
  
  const createTodo = async (newTodo, todos, setTodos) => {
    try {
      const res = await axios.post(TODO_URL, newTodo);
      const updatedTodos = [...todos, res.data];
      setTodos(updatedTodos);
    } catch (err) {
      console.log(err);
    }
  };
  
  const updateTodo = async (id, updatedTodos) => {
    try {
      await axios.patch(`${TODO_URL}/${id}`, updatedTodos);
    } catch (err) {
      console.log(err);
    }
  };
  
  const clearCompletedTodos = async (todos, completedIds, setTodos) => {
    try {
      await axios.delete(`${TODO_URL}/${completedIds.join(",")}`);
      const updatedTodos = todos.filter((todo) => !todo.completed);
      setTodos(updatedTodos);
    } catch (err) {
      console.log(err);
    }
  };
  
  const deleteTodo = async (id, todos, setTodos) => {
    try {
      await axios.delete(`${TODO_URL}/${id}`);
      const updatedTodos = todos.filter((todo) => todo.id !== id);
      setTodos(updatedTodos);
    } catch (err) {
      console.log(err);
    }
  };



export { createTodo, getTodo, deleteTodo, updateTodo, clearCompletedTodos };
