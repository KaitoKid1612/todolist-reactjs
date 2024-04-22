import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";

const ActiveTodos = () => {
  const [todos, setTodos] = useState([]);
  const title = useRef();

  const saveTodo = () => {
    setTodos([...todos, title.current.value]);
    title.current.value = "";
  };

  // Update localStorage whenever the todos change
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div>
      <div className="container mb-2 flex mx-auto w-full items-center justify-center">
        <ul className="flex flex-col p-4">
          <span className="text-black text-2xl ">Enter Todo : </span>
          <input
            ref={title}
            className="block mt-2 p-2 rounded-xl bg-slate-400"
          ></input>
          <button
            onClick={saveTodo}
            className="w-36 px-2 py-4 text-white mx-auto mb-12 mt-2 bg-green-400 rounded-xl hover:bg-green-500 text-2xl"
          >
            Save
          </button>
        </ul>

        {todos &&
          todos.map((todo, index) => {
            return (
              // eslint-disable-next-line react/jsx-key
              <li className="border-gray-400  flex flex-row">
                <div className="select-none bg-white flex flex-1 items-center p-4 transition duration-500 ease-in-out transform hover:-translate-y-2 rounded-2xl border-2 p-6 hover:shadow-2xl border-red-400">
                  <div className="flex-1 pl-1 mr-16">
                    <div className="font-medium" key={index}>
                      {todo}
                    </div>
                  </div>
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                    Mark Active
                  </button>
                  <button
                    onClick={deleteTodo}
                    className="bg-red-500 hover:bg-red-700 ml-2 text-white font-bold py-2 px-4 rounded-full"
                  >
                    Delete
                  </button>
                </div>
              </li>
            );
          })}
      </div>
    </div>
  );
};

export default ActiveTodos;
