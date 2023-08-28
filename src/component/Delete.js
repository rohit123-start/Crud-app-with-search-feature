

const Delete = ({handleDelete,celebrity}) => {
  return (
    
    <div>
      <br></br>
        <button onClick={() => handleDelete(celebrity.id)} className="btn btn-danger">
            Delete
        </button>
      </div>


    
  )
}

export default Delete