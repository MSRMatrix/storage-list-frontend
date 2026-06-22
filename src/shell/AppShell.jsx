import { Outlet, useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Message from "../components/feedback/Message";
import Loading from "../components/ui/Loading";
import { LoadingContext } from "../context/LoadingContext";
import { getData } from "../utils/fetchFunction";
import { PartsContext } from "../context/PartsContext";
import { UserContext } from "../context/UserContext";



const AppShell = () => {
   const {loadingContext, setLoadingContext} = useContext(LoadingContext)
   const navigate = useNavigate()


  const { partsContext, setPartsContext } = useContext(PartsContext);
  const { userContext, setUserContext } = useContext(UserContext);
  
useEffect(() => {
  getData(
    setUserContext,
    setPartsContext
  );
}, []);


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
