import { useContext, useEffect, useState } from "react";
import PartForm from "../components/parts/PartForm";
import PartSearch from "../components/parts/PartSearch";
import PartList from "../components/parts/PartList";
import { PartsContext } from "../context/PartsContext";
import { UserContext } from "../context/UserContext";
import { getVisibleParts } from "../utils/getVisibleParts";
import { MessageContext } from "../context/MessageContext";
import { activateMessage } from "../utils/messageFunctions";

function Parts() {
  const { partsContext } = useContext(PartsContext);
  const { userContext } = useContext(UserContext);
  const { messageContext, setMessageContext } = useContext(MessageContext);

  const [activeTab, setActiveTab] = useState("list");
  const [filters, setFilters] = useState({});
  const [sortKey, setSortKey] = useState(null);
  const [direction, setDirection] = useState("asc");
  const [lowOnly, setLowOnly] = useState(false);
  const [deleted, setDeleted] = useState(false);

  const visibleParts = getVisibleParts(
  partsContext,
  filters,
  sortKey,
  direction,
  setMessageContext,
)
  .filter((p) => {
    if (deleted) return p.deleted;
    return !p.deleted;
  })
  .filter((p) => {
    if (deleted) return true; 
    return !lowOnly || (p.lowLimit && p.quantity < p.lowLimit);
  });
  
  function handleLowParts() {
    setDeleted(false);
    setLowOnly(true);
  }

  function deletedParts() {
    setLowOnly(false);
    setDeleted(true);
  }

  function handleReset() {
    setFilters({});
    setLowOnly(false);
    setDeleted(false);
  }

  useEffect(() => {
  activateMessage(
    "Parts found",
    visibleParts.length,
    visibleParts.length > 0 ? "200" : "404",
    setMessageContext
  );
}, [filters, lowOnly, deleted, sortKey, direction]);

  return (
    <div>
      <h1>Inventory</h1>
      <div>
        <button
          onClick={() => {
            (setActiveTab("list"), handleReset());
          }}
        >
          List
        </button>
        <button onClick={() => setActiveTab("form")}>Add</button>
        <button onClick={() => setActiveTab("search")}>Search</button>
        <button onClick={handleReset}>Reset</button>
        <button onClick={handleLowParts}>Low Parts</button>
        <button onClick={deletedParts}>Deleted Parts</button>
      </div>

      {activeTab === "form" && (
        <PartForm filters={filters} setFilters={setFilters} />
      )}
      {activeTab === "search" && (
        <PartSearch filters={filters} setFilters={setFilters} />
      )}

      <PartList
        filters={filters}
        sortKey={sortKey}
        setSortKey={setSortKey}
        direction={direction}
        setDirection={setDirection}
        visibleParts={visibleParts}
        userContext={userContext}
      />
    </div>
  );
}

export default Parts;
