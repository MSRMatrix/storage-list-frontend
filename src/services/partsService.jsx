export function partsServices(partsContext, setPartsContext, userContext, setUserContext){
    // if(userContext.loggedIn){
    // return
    // }

const data = localStorage.getItem("storage")

  if (!data) {
    const empty = []
    localStorage.setItem("storage", JSON.stringify(empty))
    setPartsContext(empty)
    return
  }

  const parsedData = JSON.parse(data)

  setPartsContext(parsedData)
}