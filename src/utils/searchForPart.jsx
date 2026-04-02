export function searchForPart(e, setFilters) {
  e.preventDefault();

  const formData = new FormData(e.target);

  const newFilters = {
    partNumber: formData.get("partNumber"),
    name: formData.get("name"),
    quantity: formData.get("quantity"),
    price: formData.get("price"),
  };

  setFilters(newFilters);
}