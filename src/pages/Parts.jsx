import { useState } from "react";
import PartForm from "../components/parts/PartForm";
import PartSearch from "../components/parts/PartSearch";
import PartList from "../components/parts/PartList";

function Parts() {
  const [activeTab, setActiveTab] = useState("list");
  const [filters, setFilters] = useState({});

  return (
    <div>
      <h1>Inventory</h1>
    
      <div>
        <button onClick={() => setActiveTab("form")}>Add</button>
        <button onClick={() => setActiveTab("search")}>Search</button>
        <button onClick={() => setFilters({})}>Reset</button>
      </div>

      {activeTab === "form" && (
        <PartForm filters={filters} setFilters={setFilters} />
      )}
      {activeTab === "search" && (
        <PartSearch filters={filters} setFilters={setFilters} />
      )}
      <PartList filters={filters} setFilters={setFilters} />
    </div>
  );
}

export default Parts;
