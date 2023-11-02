import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setTodos } from "./features/todo/todoSlice";
import Interface from "./components/Interface";
import "./App.css";
const App = () => {
  const dispatch = useDispatch();

  const getInitalTodos = async () => {
    const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/todos`
    );
    data.length = 7;
    dispatch(setTodos(data));
  };

  useEffect(() => {
    getInitalTodos();
  }, []);
  return <Interface />;
};

export default App;
