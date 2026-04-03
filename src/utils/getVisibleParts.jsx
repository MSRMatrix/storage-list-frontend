export function getVisibleParts(partsContext, filters, sortKey, direction, setMessageContext) {
  let result = partsContext;
  
  result = result.filter((item) => {
    if (filters.partNumber && item.partNumber !== filters.partNumber) return false;
    if (filters.name && item.name !== filters.name) return false;
    if (filters.quantity && item.quantity !== Number(filters.quantity)) return false;
    if (filters.price && item.price !== Number(filters.price)) return false;

    // Filter muss angepasst werden. Von - bis zu dem Wert den man eingegeben hat

    return true;
  });

  if (sortKey) {
    result = sortParts(result, sortKey, direction);
  }
  return result;
}


function sortParts(parts, key, direction) {
  return [...parts].sort((a, b) => {
    const valueA = a[key];
    const valueB = b[key];

    if (typeof valueA === "number" && typeof valueB === "number") {
      return direction === "asc" ? valueA - valueB : valueB - valueA;
    }

    return direction === "asc"
      ? String(valueA).localeCompare(String(valueB))
      : String(valueB).localeCompare(String(valueA));
  });
}