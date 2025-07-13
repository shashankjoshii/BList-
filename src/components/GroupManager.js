<<<<<<< HEAD
import React, { useState } from "react";

export default function GroupManager() {
  const [view, setView] = useState("create"); // create | join
  const [groupName, setGroupName] = useState("");
  const [inviteCode, setInviteCode] = useState("");
  const [currentGroup, setCurrentGroup] = useState(null);
  const [allGroups, setAllGroups] = useState([]);

  const handleCreate = (e) => {
    e.preventDefault();
    if (!groupName.trim()) return;

    const code = Math.random().toString(36).substring(2, 8).toUpperCase();
    const newGroup = { name: groupName.trim(), code };

    setCurrentGroup(newGroup);
    setAllGroups((prev) => [...prev, newGroup]);
    setGroupName("");
  };

  const handleJoin = (e) => {
    e.preventDefault();
    if (!inviteCode.trim()) return;

    const group = allGroups.find(
      (g) => g.code === inviteCode.trim().toUpperCase()
    );

    if (group) {
      setCurrentGroup(group);
      setInviteCode("");
    } else {
      alert("Group not found!");
    }
  };

  const switchGroup = (code) => {
    const group = allGroups.find((g) => g.code === code);
    if (group) setCurrentGroup(group);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white px-4 py-6 flex items-center justify-center">
      <div className="w-full max-w-sm sm:max-w-md md:max-w-lg bg-gray-800 rounded-xl shadow-lg p-6 space-y-6">
        <h1 className="text-xl sm:text-2xl font-bold text-center">
          {currentGroup ? `Group: ${currentGroup.name}` : "Manage Your Group"}
        </h1>

        {/* Toggle Create/Join */}
        <div className="flex justify-center gap-2 sm:gap-4 text-sm sm:text-base">
          <button
            className={`flex-1 py-2 rounded ${
              view === "create"
                ? "bg-blue-600"
                : "bg-gray-700 hover:bg-gray-600 text-gray-300"
            }`}
            onClick={() => setView("create")}
          >
            Create
          </button>
          <button
            className={`flex-1 py-2 rounded ${
              view === "join"
                ? "bg-blue-600"
                : "bg-gray-700 hover:bg-gray-600 text-gray-300"
            }`}
            onClick={() => setView("join")}
          >
            Join
          </button>
        </div>

        {/* Create Group Form */}
        {view === "create" && (
          <form onSubmit={handleCreate} className="space-y-4">
            <input
              type="text"
              placeholder="Group Name"
              value={groupName}
              onChange={(e) => setGroupName(e.target.value)}
              className="w-full px-3 py-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded"
            >
              Create Group
            </button>
          </form>
        )}

        {/* Join Group Form */}
        {view === "join" && (
          <form onSubmit={handleJoin} className="space-y-4">
            <input
              type="text"
              placeholder="Enter Invite Code"
              value={inviteCode}
              onChange={(e) => setInviteCode(e.target.value)}
              className="w-full px-3 py-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500 uppercase"
            />
            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 px-4 py-2 rounded"
            >
              Join Group
            </button>
          </form>
        )}

        {/* Group Code Share */}
        {currentGroup && (
          <div className="bg-gray-700 p-4 rounded text-center">
            <p className="text-sm text-gray-300 mb-1">Invite Code</p>
            <p className="text-lg font-mono tracking-wider text-blue-400">
              {currentGroup.code}
            </p>
          </div>
        )}

        {/* Group Switcher */}
        {allGroups.length > 1 && (
          <div className="mt-4 space-y-2">
            <p className="text-sm text-gray-400">Switch Group:</p>
            {allGroups.map((g) => (
              <button
                key={g.code}
                onClick={() => switchGroup(g.code)}
                className={`w-full px-3 py-2 rounded text-left ${
                  currentGroup?.code === g.code
                    ? "bg-blue-700 text-white"
                    : "bg-gray-700 hover:bg-gray-600 text-gray-300"
                }`}
              >
                {g.name}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  ); 
}
=======
import React, { useState } from "react";

export default function GroupManager() {
  const [view, setView] = useState("create"); // create | join
  const [groupName, setGroupName] = useState("");
  const [inviteCode, setInviteCode] = useState("");
  const [currentGroup, setCurrentGroup] = useState(null);
  const [allGroups, setAllGroups] = useState([]);

  const handleCreate = (e) => {
    e.preventDefault();
    if (!groupName.trim()) return;

    const code = Math.random().toString(36).substring(2, 8).toUpperCase();
    const newGroup = { name: groupName.trim(), code };

    setCurrentGroup(newGroup);
    setAllGroups((prev) => [...prev, newGroup]);
    setGroupName("");
  };

  const handleJoin = (e) => {
    e.preventDefault();
    if (!inviteCode.trim()) return;

    const group = allGroups.find(
      (g) => g.code === inviteCode.trim().toUpperCase()
    );

    if (group) {
      setCurrentGroup(group);
      setInviteCode("");
    } else {
      alert("Group not found!");
    }
  };

  const switchGroup = (code) => {
    const group = allGroups.find((g) => g.code === code);
    if (group) setCurrentGroup(group);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white px-4 py-6 flex items-center justify-center">
      <div className="w-full max-w-sm sm:max-w-md md:max-w-lg bg-gray-800 rounded-xl shadow-lg p-6 space-y-6">
        <h1 className="text-xl sm:text-2xl font-bold text-center">
          {currentGroup ? `Group: ${currentGroup.name}` : "Manage Your Group"}
        </h1>

        {/* Toggle Create/Join */}
        <div className="flex justify-center gap-2 sm:gap-4 text-sm sm:text-base">
          <button
            className={`flex-1 py-2 rounded ${
              view === "create"
                ? "bg-blue-600"
                : "bg-gray-700 hover:bg-gray-600 text-gray-300"
            }`}
            onClick={() => setView("create")}
          >
            Create
          </button>
          <button
            className={`flex-1 py-2 rounded ${
              view === "join"
                ? "bg-blue-600"
                : "bg-gray-700 hover:bg-gray-600 text-gray-300"
            }`}
            onClick={() => setView("join")}
          >
            Join
          </button>
        </div>

        {/* Create Group Form */}
        {view === "create" && (
          <form onSubmit={handleCreate} className="space-y-4">
            <input
              type="text"
              placeholder="Group Name"
              value={groupName}
              onChange={(e) => setGroupName(e.target.value)}
              className="w-full px-3 py-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded"
            >
              Create Group
            </button>
          </form>
        )}

        {/* Join Group Form */}
        {view === "join" && (
          <form onSubmit={handleJoin} className="space-y-4">
            <input
              type="text"
              placeholder="Enter Invite Code"
              value={inviteCode}
              onChange={(e) => setInviteCode(e.target.value)}
              className="w-full px-3 py-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500 uppercase"
            />
            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 px-4 py-2 rounded"
            >
              Join Group
            </button>
          </form>
        )}

        {/* Group Code Share */}
        {currentGroup && (
          <div className="bg-gray-700 p-4 rounded text-center">
            <p className="text-sm text-gray-300 mb-1">Invite Code</p>
            <p className="text-lg font-mono tracking-wider text-blue-400">
              {currentGroup.code}
            </p>
          </div>
        )}

        {/* Group Switcher */}
        {allGroups.length > 1 && (
          <div className="mt-4 space-y-2">
            <p className="text-sm text-gray-400">Switch Group:</p>
            {allGroups.map((g) => (
              <button
                key={g.code}
                onClick={() => switchGroup(g.code)}
                className={`w-full px-3 py-2 rounded text-left ${
                  currentGroup?.code === g.code
                    ? "bg-blue-700 text-white"
                    : "bg-gray-700 hover:bg-gray-600 text-gray-300"
                }`}
              >
                {g.name}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  ); 
}
>>>>>>> 1ae45cf06474411b76d756dd99106c8f463d57e3
