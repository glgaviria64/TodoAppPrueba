import React from "react";

import closeIcon from "../../assets/close-icons.svg";
import checkIcon from "../../assets/check-icon.svg";

const Todo = ({ todo, handleSetComplete, handleDelete }) => {
  const { id, text, completed } = todo;

  return (
    <div className="flex items-center justify-between p-4 bg-white border-b border-solid border-gray-300 ">
      <div className="flex items-center">
        {completed ? (
          <div
            onClick={() => handleSetComplete(id)}
            className="bg-gradient-to-r from-sky-500 to-indigo-500 p-1 rounded-full cursor-pointer"
          >
            <img className="h-4 w-4 " src={checkIcon} alt="Check Icon" />
          </div>
        ) : (
          <span
            onClick={() => handleSetComplete(id)}
            className={`border border-gray-300 border-solid p-3 rounded-full cursor-pointer`}
          ></span>
        )}

        <p
          className={
            "pl-3 text-gray-700 text-[14px] " +
            (completed && "line-through text-gray-400")
          }
        >
          {text}
        </p>
      </div>

      <img
        onClick={() => handleDelete(id)}
        className="h-6 w-6 cursor-pointer transition-all duration-300 ease-in"
        src={closeIcon}
        alt="Close Icon"
      />
    </div>
  );
};

export { Todo };
