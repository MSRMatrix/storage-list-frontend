import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { PartsContext } from "../context/PartsContext";

const Dashboard = () => {
  const { userContext } = useContext(UserContext);
  const { partsContext } = useContext(PartsContext);

  const deletedParts = partsContext.filter((item) => item.deleted).length;

  return (
    <>
      <h2>Welcome back, {userContext.username || "User"}</h2>
      <p>Currency: {userContext.currency}</p>
      <p>
        Account created: {new Date(userContext.createdAt).toLocaleDateString()}
      </p>

      <p>Is it a company: {userContext.company ? "Yes" : "No"}</p>
      <p>Your Email: {userContext.email}</p>
      <p>Password: Protected</p>
      <p>Number of parts: {partsContext.length}</p>
      <p>Deleted parts: {deletedParts}</p>
    </>
  );
};

export default Dashboard;
