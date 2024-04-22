import { useState } from "react";

const CompletedTodos = () => {
  const [todos, setTodos] = useState([]);

  return (
    <div>
      <h1 className=" text-center text-5xl p-4">Completed Todos</h1>
      <div className="container mb-2 flex mx-auto w-full items-center justify-center">
        <ul className="flex flex-col p-4">
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

                    <button className="bg-red-500 hover:bg-red-700 ml-2 text-white font-bold py-2 px-4 rounded-full">
                      Delete
                    </button>
                  </div>
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
};

export default CompletedTodos;
