import Lists from "./component/Lists";
import { useState } from "react";
import members from "./component/Api";

function App() {
  const [celebrities , setCelebrities] = useState(members)
  const [displayname, setDisplayname] = useState("")

  const handleDelete = (taskId) => {
    const updatedTasks = celebrities.filter(celebrity => celebrity.id !== taskId);
    console.log(updatedTasks)
    setCelebrities(updatedTasks);
  };
 

  const handleupdate = (id,jsondata) => {
    console.log(jsondata)
    // const stringobj = JSON.stringify(obj)
    // localStorage.setItem("data",stringobj)
    console.log("inside update")
    console.log(jsondata.name)
    const position = id - 1
  
    
    
    members[position].name = jsondata.name
    members[position].age = jsondata.age
    members[position].country = jsondata.country
    members[position].description = jsondata.description
    members[position].gender = jsondata.gender
    setCelebrities(members)
  }

  const age = (dobdate) => {
    const birthdate = new Date(dobdate)
    const today = new Date();
    const age = today.getFullYear() - birthdate.getFullYear() - 
               (today.getMonth() < birthdate.getMonth() || 
               (today.getMonth() === birthdate.getMonth() && today.getDate() < birthdate.getDate())) + " Years";
    return age;
  }

  const name = (first,last) => {
    return first + " " + last
  }

  members.map(m=>{
    m["name"] = name(m.first,m.last)
  })
  
  
  members.map(m=>{
    m["age"] = age(m.dob)
  })

  


  return (
    <div className="parent-container">
      <Lists setDisplayname={setDisplayname} handleupdate={handleupdate} displayname={displayname} celebrities = {celebrities} handleDelete={handleDelete}></Lists>
    </div>
  );
}

export default App;
