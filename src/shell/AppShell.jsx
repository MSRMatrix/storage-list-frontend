import { Outlet, useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { partsServices } from "../services/partsService";
import { PartsContext } from "../context/PartsContext";
import { UserContext } from "../context/UserContext";
import Message from "../components/feedback/Message";
import Loading from "../components/ui/Loading";
import { LoadingContext } from "../context/LoadingContext";
import { getData } from "../utils/fetchFunction";



const AppShell = () => {
      const { partsContext, setPartsContext } = useContext(PartsContext);
  const {userContext, setUserContext} = useContext(UserContext)
   const {loadingContext, setLoadingContext} = useContext(LoadingContext)
   const navigate = useNavigate()
  
  useEffect(() => {
    
  }, []);
//   dependency fehlt


useEffect(() => {
  async function loadParts() {
    if (userContext.createdAt) {
partsServices(partsContext, setPartsContext, userContext, setUserContext)
    } else {
      const localParts =
        JSON.parse(localStorage.getItem("parts")) || [];
      setPartsContext(localParts);
      
    }
  }

  loadParts();
}, [userContext.createdAt]);



useEffect(() => {
getData(navigate, setUserContext, setPartsContext)
},[])


  return (
    <>
      <Navbar />
      <Message />
      <main>
       {loadingContext ? <Loading /> : <></>}
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default AppShell;
