import PartForm from "../components/parts/PartForm";
import PartSearch from "../components/parts/PartSearch";
import PartList from "../components/parts/PartList";

function Parts() {
  return (
    <div>
      <h1>Inventory</h1>

      <PartForm />
      <PartSearch />
      <PartList />
    </div>
  );
}

export default Parts;
