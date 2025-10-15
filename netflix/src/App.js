// src/App.js
import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from './components/Login'; // Correct path relative to App.js
import Browse from './components/Browse'; // Correct path relative to App.js
import { Toaster } from 'react-hot-toast';
import './App.css'; // Correct path relative to App.js

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />
    },
    {
      path: "/browse", // Use "/browse" for consistency and absolute path
      element: <Browse />
    }
  ]);

  return (
    <div>
      <RouterProvider router={appRouter} /> {/* RouterProvider is now inside App */}
      <Toaster />
    </div>
  );
}

export default App;