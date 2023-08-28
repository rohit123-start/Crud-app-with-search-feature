import { useState } from "react"
import React from 'react'
import Details from "./Details";
import Dropdown from "./Dropdown";



const List = ({celebrity,handleDelete,handleupdate,setDisplayname}) => {
    const [edit,setEdit] = useState(false);
    const [show,setShow] = useState(true);
    const [back,setBack] = useState(false)
        
  return (
    <div className="container">
        {edit?<Details celebrity={celebrity} back={back} setBack={setBack} handleupdate={handleupdate} edit={edit} setEdit={setEdit} show={show} setShow={setShow}></Details>:<Dropdown back={back} celebrity={celebrity} handleDelete={handleDelete} handleupdate={handleupdate} edit={edit} setEdit={setEdit}></Dropdown>}
    </div>
    
        
  )
}

export default List