"use client";
import { useEffect, useState } from "react";

export default function TodoApp() {
  const [task, setTask] = useState("");
  const [priority, setPriority] = useState("High");
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("All");
const [aiSuggestion, setAiSuggestion] = useState("");
const [loadingAI, setLoadingAI] = useState(false);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("todos"));
    if (saved) setTodos(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    if (!task) return;
    setTodos([...todos, { task, priority, done: false }]);
    setTask("");
  };
const removeTodo = (indexToRemove) => {
  const updated = todos.filter((_, index) => index !== indexToRemove);
  setTodos(updated);
};

  const filteredTodos = todos.filter(todo => {
    if (filter === "Completed") return todo.done;
    if (filter === "High") return todo.priority === "High";
    return true;
  });
  const getAISuggestion = async () => {
  setLoadingAI(true);
  setAiSuggestion("");

  const res = await fetch("/api/ai-focus", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ todos })
  });

  const data = await res.json();
  setAiSuggestion(data.suggestion);
  setLoadingAI(false);
};

return (
  <div className="max-w-xl mx-auto mt-10 bg-white/40 backdrop-blur-md shadow-xl rounded-2xl p-6">

    <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
      Priority To-Do List
    </h2>

    {/* Input Section */}
    <div className="flex gap-2 mb-4">
      <input
        className="flex-1 px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
        placeholder="Enter task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />

      <select
        className="px-3 py-2 rounded-lg border border-gray-300"
        onChange={(e) => setPriority(e.target.value)}
      >
        <option>High</option>
        <option>Medium</option>
        <option>Low</option>
      </select>

      <button
        className="px-4 py-2 bg-purple-300 hover:bg-purple-400 rounded-lg font-medium"
        onClick={addTodo}
      >
        Add
      </button>
    </div>

    {/* Filters */}
    <div className="flex justify-center gap-4 mb-4">
      <button className="filter-btn" onClick={() => setFilter("All")}>All</button>
      <button className="filter-btn" onClick={() => setFilter("High")}>High</button>
      <button className="filter-btn" onClick={() => setFilter("Completed")}>Completed</button>
    </div>

    <ul className="space-y-2">
      {filteredTodos.map((todo, index) => (
        <li
          key={index}
          className="flex items-center gap-2 bg-white/70 p-3 rounded-lg shadow-sm"
        >
          <input
            type="checkbox"
            checked={todo.done}
            onChange={() => {
              const updated = [...todos];
              updated[index].done = !updated[index].done;
              setTodos(updated);
            }}
          />
          <span className={`${todo.done ? "line-through text-gray-500" : ""}`}>
            {todo.task}
          </span>
          <span className="ml-auto flex items-center gap-3">
  <span className="text-sm text-gray-600">
    {todo.priority}
  </span>

  <button
    onClick={() => removeTodo(index)}
    className="text-red-500 hover:text-red-700 font-semibold"
  >
    ✕
  </button>
</span>

        </li>
      ))}
    </ul>

    <button
      onClick={getAISuggestion}
      className="mt-6 w-full py-2 bg-blue-300 hover:bg-blue-400 rounded-lg font-medium"
    >
      AI Suggest Today’s Focus
    </button>

    {loadingAI && (
      <p className="text-center mt-3 text-gray-600">AI is thinking...</p>
    )}

    {aiSuggestion && (
      <pre className="mt-4 bg-white/70 p-4 rounded-lg text-sm whitespace-pre-wrap">
        {aiSuggestion}
      </pre>
    )}
  </div>
);

}
