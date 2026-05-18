import { NavLink  } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate()

const navbarItems = [
    { id: "parts", name: "Parts", path: "parts" },
    { id: "settings", name: "Settings", path: "settings" },
    { id: "register", name: "Register", path: "register" },
    { id: "login", name: "Login", path: "login" },
    { id: "logout", name: "Logout", path: "logout" },
]

async function logout(){
  const wantToLogout = confirm("You want to logout?")
  if(wantToLogout){
    alert("Logout Function")
    navigate("/")
  }else{
    alert("Logout stopped!")
    navigate("/")
  }
}

return (
   <ul className="navbar">
  {navbarItems.map((item) => ( item.id === "logout" ? <li className="navbar-children" onClick={() => logout()}> {item.id}</li> :
      <NavLink to={`/${item.path}`}key={item.id} className="navbar-children">
        {item.name}
      </NavLink>
  ))}
</ul>
)
}

export default Navbar;