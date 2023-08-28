import { useRef } from "react";
import { SlArrowUp } from "react-icons/sl";

const Details = ({celebrity,handleupdate,setEdit,edit,show,setShow,back,setBack}) => {
    
    const updatedname = useRef(null);
    const updatedage = useRef(null);
    const updatedgender = useRef(null);
    const updatedcountry = useRef(null);
    const updateddescription = useRef(null);

    const handleSubmit = event => {
        event.preventDefault();
    

        const formobj ={
            name:updatedname.current.value,
            age: updatedage.current.value,
            gender: updatedgender.current.value,
            country: updatedcountry.current.value,
            description: updateddescription.current.value
        }

        setEdit(!edit)
        setShow(!show)


        handleupdate(celebrity.id,formobj)
        event.target.reset();
        
    };

    
    

  return (
    
    <div>
        <div className="row">
            <div className='container-x'>
                
                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-2">
                            <img src={`${celebrity.picture}`} height={100} width={86}></img>
                        </div>
                        <div className='col-9'>
                            <br></br>
                            <h1 key={celebrity.id}>
                            <input defaultValue={celebrity.name} ref={updatedname}></input>
                            </h1>
                        </div>
                        <div className="col-1"> 
                            <br></br>
                            <h1 style={{cursor: 'pointer'}} onClick={()=>setShow(!show)}>
                                <SlArrowUp onClick={()=>{setEdit(!edit)}}></SlArrowUp>
                            </h1>
                        </div>   
                    </div>
                    <br></br>
                    <div className="row">
                        <div className="col-4">
                            <h5>Age</h5>
                            <div>
                                <input defaultValue={celebrity.age} ref={updatedage}></input>
                            </div>
                        </div>
                        <div className="col-4">
                            <h5>Gender</h5>
                            <div>
                                <select defaultValue={celebrity.gender} ref={updatedgender} width={50}>
                                    <option value="Male">male</option>
                                    <option value="Female">female</option>
                                    <option value="Rather not say">Rather not say</option>
                                </select>
                            </div>                    
                        </div>
                        <div className="col-4">
                            <h5>Country</h5>
                            <div>
                                <input defaultValue={celebrity.country} ref={updatedcountry}></input>
                            </div>                    
                        </div>
                    </div>
                    <br></br>
                    <div className="row">
                        <div className="col-xl-12">
                            <h5>Description</h5>
                            <div>
                                <textarea defaultValue={celebrity.description} rows={8} cols={87} ref={updateddescription}></textarea>
                            </div>
                        </div>
                    </div>
                    <br></br>
                    <div className="row">
                        <div className="col-8"></div>
                        <div className="col-2">
                            <button type="submit" className="btn btn-primary" onClick={setBack(true)}>Save</button>
                        </div>
                        <div className="col-2">
                            <button className="btn btn-warning" onClick={()=>{setEdit(!edit)}} >Discard</button>
                        </div>
                    </div>
                </form>          
            </div>

        </div>
        
    </div>
  )
}

export default Details