import { activateMessage } from "./messageFunctions";

const URL = import.meta.env.VITE_BACKENDURL;

export async function fetchParts() {
  try {
    const response = await fetch(`${URL}/part`, {
      method: "GET",
      credentials: "include",
    });

    const data = await response.json();

    if (!response.ok) throw new Error(data.message);

    return data;
  } catch (error) {
    console.error("Fetch parts error:", error);
    return null;
  }
}

export async function createUser(
  newItem,
  method,
  setMessageContext,
  navigate,
  link,
  partsContext,
  setPartsContext,
) {
  try {
    const response = await fetch(`${URL}/${method}/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({
        user: newItem,
        parts: partsContext,
      }),
    });
    const data = await response.json();

    if (!response.ok) {
      const errorMsg = data.errors?.map((item) => `• ${item.msg}`).join("\n");
      activateMessage("Error", errorMsg, "404", setMessageContext);
      return;
    }
    setPartsContext([]);
    localStorage.setItem("parts", []);
    return navigate(link);
  } catch (error) {
    console.error("Create error:", error);
  }
}

export async function createPartFetch(
  newItem,
  method,
  setMessageContext,
  navigate,
  link,
  partsContext,
  setPartsContext,
) {
  try {
    const response = await fetch(`${URL}/${method}/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({ parts: partsContext }),
    });

    const data = await response.json();

    if (!response.ok) {
      const errorMsg = data.errors?.map((item) => `• ${item.msg}`).join("\n");
      activateMessage("Error", errorMsg, "404", setMessageContext);
      return;
    }

    setPartsContext(data.newPart);

    return;
  } catch (error) {
    console.error("Create error:", error);
  }
}

export async function loginFetch(
  newItem,
  method,
  setMessageContext,
  navigate,
  link,
  setUserContext,
) {
  try {
    const response = await fetch(`${URL}/${method}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(newItem),
    });
    const data = await response.json();

    if (!response.ok) {
      const errorMsg = data.errors?.map((item) => `• ${item.msg}`).join("\n");
      activateMessage("Error", data.message, "404", setMessageContext);
      return;
    }
    if (response.ok) {
      activateMessage(
        "Login succsessfull!",
        `Welcome back, ${data.username ? data.username : "User"}`,
        "200",
        setMessageContext,
      );
      setUserContext(data.userData);
      navigate(link);
      return;
    }
  } catch (error) {
    console.error("Create error:", error);
  }
}

export async function logoutFetch(
  method,
  setMessageContext,
  navigate,
  link,
  setUserContext,
) {
  try {
    const response = await fetch(`${URL}/${method}/logout`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });
    const data = await response.json();

    if (!response.ok) {
      const errorMsg = data.errors?.map((item) => `• ${item.msg}`).join("\n");
      activateMessage("Error", data.message, "404", setMessageContext);
      return;
    }
    if (response.ok) {
      activateMessage(
        "Logout succsessfull!",
        `Goodbye`,
        "200",
        setMessageContext,
      );
      navigate(link);
      return;
    }
  } catch (error) {
    console.error("Create error:", error);
  }
}

export async function updatePart(partId, updateData) {
  try {
    const response = await fetch(`${URL}/part/${partId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(updateData),
    });

    const data = await response.json();

    if (!response.ok) throw new Error(data.message);

    return data;
  } catch (error) {
    console.error("Update error:", error);
  }
}

export async function getData(
  setUserContext,
  setPartsContext
) {
  const URL = import.meta.env.VITE_BACKENDURL;

  try {
    const response = await fetch(`${URL}/user`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });

    const data = await response.json();

    if (!response.ok) {
      console.log(data.message);
      return false;
    }

    setUserContext(data.user);
    setPartsContext(data.parts);

    console.log("Daten erfolgreich geladen!");
    return true;

  } catch (error) {
    console.log(error);
    return false;
  }
}