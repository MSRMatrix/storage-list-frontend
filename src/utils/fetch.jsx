export async function fetchFunction(backendData, urlString) {
    try {
    const response = await fetch(`${URL}/part/${urlString}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(backendData),
    });
    const data = await response.json();
    if (!response.ok) {
      return console.log(data);
    } else {
      console.log(data);
    }
  } catch (error) {
    console.error("Error toggling 2FA:", error);
  }
}