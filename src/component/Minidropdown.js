import React from 'react'
import Delete from './Delete'
import Update from './Update'

const Minidropdown = ({celebrity,handleDelete,handleupdate,setEdit,edit}) => {
  return (
    <div>
                <div className="row">
                    <div className="col-4">
                        <h3>Age</h3>
                        <div>
                            <div>{celebrity.age}</div>
                        </div>
                    </div>
                    <div className="col-4">
                        <h3>Gender</h3>
                        <div>
                            <div>{celebrity.gender}</div>
                        </div>                    
                    </div>
                    <div className="col-4">
                        <h3>Country</h3>
                        <div>
                            <div>{celebrity.country}</div>
                        </div>                    
                    </div>
                </div>
                <br></br>
                <div className="row">
                    <div className="col-xl-12">
                        <h3>Description</h3>
                        <div>
                            <div>{celebrity.description}</div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-8"></div>
                    <div className="col-2">
                        <Delete handleDelete={handleDelete} celebrity={celebrity}></Delete>
                    </div>
                    <div className="col-2">
                        <Update celebrity={celebrity} setEdit={setEdit} edit={edit} handleupdate={handleupdate}></Update>
                    </div>
                </div>
    </div>
  )
}

export default Minidropdown