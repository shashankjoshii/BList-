// BucketList.js
import React, { useState } from "react";

export default function BucketList() {
  const [items, setItems] = useState([
    { id: 1, content: "Go skydiving", is_done: false },
    { id: 2, content: "Visit Japan", is_done: true },
  ]);
  const [filter, setFilter] = useState("all");
  const [newItem, setNewItem] = useState("");

  const handleAddItem = (e) => {
    e.preventDefault();
    if (!newItem.trim()) return;

    const newEntry = {
      id: Date.now(),
      content: newItem.trim(),
      is_done: false,
    };

    setItems([newEntry, ...items]);
    setNewItem("");
  };

  const toggleDone = (id) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, is_done: !item.is_done } : item
      )
    );
  };

  const handleRemove = (id) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const filteredItems =
    filter === "all"
      ? items
      : items.filter((item) =>
          filter === "done" ? item.is_done : !item.is_done
        );

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4">
      <div className="max-w-md mx-auto space-y-4">
        {/* Add Item Form */}
        <form onSubmit={handleAddItem} className="flex gap-2">
          <input
            type="text"
            placeholder="Add a bucket list item..."
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
          />
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
          >
            Add
          </button>
        </form>

        {/* Filters */}
        <div className="flex justify-center gap-4 text-sm font-medium">
          {["all", "done", "pending"].map((type) => (
            <button
              key={type}
              onClick={() => setFilter(type)}
              className={`capitalize pb-1 ${
                filter === type
                  ? "text-blue-400 border-b-2 border-blue-400"
                  : "text-gray-400"
              }`}
            >
              {type}
            </button>
          ))}
        </div>

        {/* List Items */}
        <ul className="space-y-2">
          {filteredItems.length === 0 ? (
            <p className="text-center text-gray-500">No items yet.</p>
          ) : (
            filteredItems.map((item) => (
              <li
                key={item.id}
                className="flex justify-between items-center bg-gray-800 p-3 rounded shadow-sm"
              >
                <span
                  className={`flex-1 ${
                    item.is_done ? "line-through text-gray-500" : ""
                  }`}
                >
                  {item.content}
                </span>
                <div className="flex gap-2 ml-2">
                  <button
                    onClick={() => toggleDone(item.id)}
                    className={`text-xs px-3 py-1 rounded ${
                      item.is_done
                        ? "bg-green-900 text-green-300"
                        : "bg-gray-700 text-gray-300"
                    }`}
                  >
                    {item.is_done ? "Done" : "Mark"}
                  </button>
                  <button
                    onClick={() => handleRemove(item.id)}
                    className="text-xs px-3 py-1 rounded bg-red-700 text-white hover:bg-red-800"
                  >
                    ✕
                  </button>
                </div>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
}
