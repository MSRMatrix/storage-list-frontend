function partsServices(){
    // if(login.open){ Dann wird nicht der Locale storage genutzt sondern die Datenbank}

const data = localStorage.getItem("parts")
  return data ? JSON.parse(data) : []

}