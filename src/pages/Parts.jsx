import { useState } from "react";
import PartForm from "../components/parts/PartForm";
import PartSearch from "../components/parts/PartSearch";
import PartList from "../components/parts/PartList";

function Parts() {
  const [activeTab, setActiveTab] = useState("list");
  return (
    <div>
      <h1>Inventory</h1>

    <div>
      <button onClick={() => setActiveTab("form")}>Add</button>
      <button onClick={() => setActiveTab("search")}>Search</button>
      <button onClick={() => setActiveTab("list")}>List</button>
    </div>

    {activeTab === "form" && <PartForm />}
    {activeTab === "search" && <PartSearch />}
    {activeTab === "list" && <PartList />}
    </div>
  );
}

export default Parts;
