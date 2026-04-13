import { Outlet } from "react-router-dom";
import { useContext, useEffect } from "react";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { partsServices } from "../services/partsService";
import { PartsContext } from "../context/PartsContext";
import { UserContext } from "../context/UserContext";
import Message from "../components/feedback/Message";
import Loading from "../components/ui/Loading";



const AppShell = () => {
      const { partsContext, setPartsContext } = useContext(PartsContext);
  const {userContext, setUserContext} = useContext(UserContext)
  
  useEffect(() => {
    partsServices(partsContext, setPartsContext, userContext, setUserContext)
  }, []);
//   dependency fehlt

  return (
    <>
      <Navbar />
      <Message />
      <main>
        <Loading />
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default AppShell;
