// src/App.js
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BucketList from "./components/BucketList";
import GroupManager from "./components/GroupManager";
import AppLayout from "./components/AppLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <AppLayout groupName="Bucket List">
              <BucketList />
            </AppLayout>
          }
        />
        <Route
          path="/group"
          element={
            <AppLayout groupName="Manage Groups">
              <GroupManager />
            </AppLayout>
          }
        />
        <Route
          path="*"
          element={
            <AppLayout groupName="404 Not Found">
              <div className="text-center text-red-400 mt-10 text-xl">
                404 - Page Not Found
              </div>
            </AppLayout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
