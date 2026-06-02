import { NavLink  } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import { useContext } from "react";
import { logoutFetch } from "../../utils/fetchFunction";
import { MessageContext } from "../../context/MessageContext";

const Navbar = () => {
  const navigate = useNavigate()  
  const {userContext, setUserContext} = useContext(UserContext)
  const {setMessageContext} = useContext(MessageContext)
  
const navbarItems = [
  { id: "parts", name: "Parts", path: "parts" },
  { id: "settings", name: "Settings", path: "settings" },

  ...(userContext.createdAt
    ? [{ id: "logout", name: "Logout", path: "logout" }]
    : [
        { id: "register", name: "Register", path: "register" },
        { id: "login", name: "Login", path: "login" },
      ]),
];

async function logout(){
  const wantToLogout = confirm("You want to logout?")
  if(wantToLogout){
    logoutFetch("user", setMessageContext, navigate, "/", setUserContext)
    navigate("/")
  }else{
    alert("Logout stopped!")
    navigate("/")
  }
}

return (
   <ul className="navbar">
  {navbarItems.map((item) => ( item.id === "logout" ? <li className="navbar-children" key={item.id} onClick={() => logout()}> {item.id}</li> :
      <NavLink to={`/${item.path}`}key={item.id} className="navbar-children">
        {item.name}
      </NavLink>
  ))}
</ul>
)
}

export default Navbar;