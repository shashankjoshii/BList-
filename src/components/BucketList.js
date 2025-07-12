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
    <div className="min-h-screen bg-zinc-900 text-white px-4 py-6 font-sans">
      <div className="max-w-3xl mx-auto space-y-6">

        {/* Header */}
        <h1 className="text-3xl font-semibold text-center mb-4 tracking-tight text-white">
          🎯 Bucket List
        </h1>

        {/* Add Item Input */}
        <form onSubmit={handleAddItem} className="flex gap-3 items-center">
          <input
            type="text"
            placeholder="What's on your mind?"
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            className="flex-1 px-4 py-3 rounded-xl bg-zinc-800 border border-zinc-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="px-5 py-3 bg-blue-600 hover:bg-blue-700 transition rounded-xl text-white font-medium"
          >
            Add
          </button>
        </form>

        {/* Filters */}
        <div className="flex justify-center gap-6 text-sm mt-4">
          {["all", "done", "pending"].map((type) => (
            <button
              key={type}
              onClick={() => setFilter(type)}
              className={`capitalize px-2 pb-1 border-b-2 ${
                filter === type
                  ? "border-blue-500 text-blue-400"
                  : "border-transparent text-gray-400 hover:text-gray-200"
              } transition`}
            >
              {type}
            </button>
          ))}
        </div>

        {/* Masonry Grid for Items */}
        <div className="grid sm:grid-cols-2 gap-4 pt-4">
          {filteredItems.length === 0 ? (
            <p className="text-center text-gray-500 col-span-full">
              No items yet.
            </p>
          ) : (
            filteredItems.map((item) => (
              <div
                key={item.id}
                className="bg-zinc-800 rounded-2xl p-5 shadow-md flex flex-col justify-between hover:shadow-lg transition"
              >
                <p
                  className={`text-lg ${
                    item.is_done ? "line-through text-gray-500" : ""
                  }`}
                >
                  {item.content}
                </p>
                <div className="mt-4 flex justify-between gap-2">
                  <button
                    onClick={() => toggleDone(item.id)}
                    className={`flex-1 py-2 rounded-lg text-sm transition font-medium ${
                      item.is_done
                        ? "bg-green-900 text-green-300 hover:bg-green-800"
                        : "bg-gray-700 text-white hover:bg-gray-600"
                    }`}
                  >
                    {item.is_done ? "Done ✅" : "Mark Done"}
                  </button>
                  <button
                    onClick={() => handleRemove(item.id)}
                    className="bg-red-700 hover:bg-red-800 transition text-white px-4 rounded-lg text-sm"
                  >
                    ✕
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
