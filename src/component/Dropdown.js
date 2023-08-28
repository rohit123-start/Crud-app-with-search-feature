import { SlArrowUp,SlArrowDown } from "react-icons/sl";
import { useState } from "react";
import Minidropdown from "./Minidropdown";

const Dropdown = ({celebrity,handleDelete,handleupdate,setEdit,edit,back}) => {
    const [show,setShow] = useState(false);

  
  return (
    <div>
        <div>
            <div className="container-x">
                <div>
                    <div className="row">
                        <div className="col-2">
                            <img src={`${celebrity.picture}`} height={100} width={86}></img>
                        </div>
                        <div className='col-9'>
                            <br></br>
                            <h1 key={celebrity.id}>
                                <div className="name">{celebrity.name}</div>
                            </h1>
                        </div>
                        <div className="col-1">
                            <br></br>
                            <h1 style={{cursor: 'pointer'}} onClick={()=>setShow(!show)}>
                                {!show?<SlArrowDown></SlArrowDown>:
                                
                                <SlArrowUp onClick={()=>{setEdit(false)}}></SlArrowUp>}
                            </h1>
                        </div>   
                    </div>         
                </div>
                <br></br>
                {show?<Minidropdown celebrity={celebrity} handleDelete={handleDelete} edit={edit} setEdit={setEdit}></Minidropdown>:""}
            </div>
            
                


        </div>
    
    </div>
  )
}

export default Dropdown
