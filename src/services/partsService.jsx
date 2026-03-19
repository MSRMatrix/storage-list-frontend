export function partsServices(partsContext, setPartsContext, userContext, setUserContext){
    // if(userContext.loggedIn){
    // return
    // }

const data = localStorage.getItem("parts")

  if (!data) {
    const empty = []
    localStorage.setItem("parts", JSON.stringify(empty))
    setPartsContext(empty)
    return
  }

  const parsedData = JSON.parse(data)

  setPartsContext(parsedData)
}