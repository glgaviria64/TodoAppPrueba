import React, { useState } from "react";

function TodoInput({ addTodo }) {
  const [text, setText] = useState("");

  const handleTodo = (e) => {
    if (e.key.toLowerCase() === "enter") {
      addTodo(text);
      setText("");
    }
  };

  return (
    <div className="mt-6 relative">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <span className="border border-gray-300 border-solid p-3 rounded-full">
          {" "}
        </span>
      </div>
      <input
        type="text"
        className=" font-inter pl-12 w-full py-4 bg-white rounded-md outline-none text-gray-800 transition-all duration-300 ease-in-out"
        placeholder="Que necesitas hacer?"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => handleTodo(e)}
      />
    </div>
  );
}

export { TodoInput };