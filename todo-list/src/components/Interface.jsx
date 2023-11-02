import { useDispatch, useSelector } from "react-redux";
import {
  addNewTodo,
  deleteTodo,
  selectDone,
  selectTodos,
  setImportant,
  setNewTodoInput,
  toggleCompleted,
} from "../features/todo/todoSlice";
const Interface = () => {
  const todos = useSelector(selectTodos);
  const done = useSelector(selectDone);
  const dispatch = useDispatch();

  if (!todos) {
    return <h1>To-do list is loading</h1>;
  }

  //   sort by function
  const sort = () => {
    const copy = [...todos];
    copy.sort((item1, item2) => {
      if (item1.completed === true) {
        return -1;
      }
      if (item2.completed === true) {
        return 1;
      }
      return 0;
    });

    if (done) {
      copy.reverse();
    }
    return copy;
  };
  const copy = sort();

  //
  return (
    <>
      <div className="controls">
        <label htmlFor="task">Task: </label>
        <input
          id="task"
          type="text"
          onInput={(e) => {
            dispatch(setNewTodoInput(e.target.value));
          }}
        />
        <button onClick={() => dispatch(addNewTodo())}>Add</button>
      </div>
      <div>
        <button onClick={() => dispatch(setImportant())}>
          {done ? "Not Important" : "Important"}
        </button>
      </div>

      <ul className="todos">
        {copy.map((todo) => {
          return (
            <li>
              {todo.title}
              <div>
                <button
                  className={todo.completed ? "important" : "not-important"}
                  onClick={() => dispatch(toggleCompleted(todo.id))}
                  key={todo.id}
                >
                  Important
                </button>
                <button
                  className="deleteButton"
                  onClick={() => dispatch(deleteTodo(todo.id))}
                >
                  Delete
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Interface;
