import { NavLink  } from "react-router-dom";

const Navbar = () => {

const navbarItems = [
    { id: "parts", name: "Parts", path: "parts" },
    { id: "settings", name: "Settings", path: "settings" },
    { id: "register", name: "Register", path: "register" },
    { id: "login", name: "Login", path: "login" },
    { id: "logout", name: "Logout", path: "logout" },
]

return (
   <ul>
  {navbarItems.map((item) => (
    <li key={item.id}>
      <NavLink to={`/${item.path}`}>
        {item.name}
      </NavLink>
    </li>
  ))}
</ul>
)
}

export default Navbar;