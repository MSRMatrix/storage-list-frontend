import { useState } from "react";
import "./App.css";
import { PartsContext } from "./context/PartsContext";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import Parts from "./pages/Parts";
import Register from "./pages/Register";
import Settings from "./pages/Settings";
import AppShell from "./shell/AppShell";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { UserContext } from "./context/UserContext";
import { MessageContext } from "./context/MessageContext";

function App() {
  const router = createBrowserRouter([
    {
      element: <AppShell />,
      path: "/",
      children: [
        {
          element: <Parts />,
          path: "parts",
        },
        {
          element: <Settings />,
          path: "settings",
        },
        {
          element: <Register />,
          path: "register",
        },
        {
          element: <Login />,
          path: "login",
        },
        {
          element: <Logout />,
          path: "logout",
        },
      ],
    },
  ]);
const [partsContext, setPartsContext] = useState(
  JSON.parse(localStorage.getItem("parts")) || []
);
  
  const [userContext, setUserContext] = useState({
    id: "",
    name: "",
    email: "",
    company: false,
    role: "user",
    loggedIn: false,
    currency: "Euro",
    deleted: false
  });

  const [messageContext, setMessageContext] = useState({
    topic: "",
    status: "",
    text: "",
    active: false
  })

  return (
    <>
    <MessageContext.Provider value={{messageContext, setMessageContext}}>
      <UserContext.Provider value={{ userContext, setUserContext }}>
        <PartsContext.Provider value={{ partsContext, setPartsContext }}>
          <RouterProvider router={router} />
        </PartsContext.Provider>
      </UserContext.Provider>
      </MessageContext.Provider>
    </>
  );
}

export default App;

// [
//   {
//     id: "1",
//     partNumber: "A1001",
//     name: "Arduino Uno",
//     quantity: 5,
//     price: 10,
//     location: "Box A3"
//   }
// ]
