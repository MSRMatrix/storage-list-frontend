import { Outlet } from "react-router-dom";
import { useContext, useEffect } from "react";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { partsServices } from "../services/partsService";
import { PartsContext } from "../context/PartsContext";
import { UserContext } from "../context/UserContext";

const AppShell = () => {
      const { partsContext, setPartsContext } = useContext(PartsContext);
  const {userContext, setUserContext} = useContext(UserContext)

  console.log(partsContext);
  
  useEffect(() => {
    partsServices(partsContext, setPartsContext, userContext, setUserContext)
  }, []);
//   dependency fehlt

  return (
    <>
      <Navbar />
      AppShell
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default AppShell;
