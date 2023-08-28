const Update = ({celebrity,setEdit,edit}) => {
  return (
    <div>
        <br></br>
        <button onClick={()=>{setEdit(!edit)}} className="btn btn-success">
            Edit
        </button>
    </div>
  )
}

export default Update