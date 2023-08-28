import {React,useState} from 'react'
import List from './List'


const Lists = ({celebrities,handleDelete,handleupdate,setDisplayname,displayname}) => {
    const [searchQuery, setSearchQuery] = useState('');

    console.log(searchQuery)
    
  return (
    <div className='container'>
        <br></br>
        <div>
            <h3 className="searchbar">
                
                <input placeholder="Search..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} size={54.5} height={15} id="inputGroup-sizing-lg"/>
                <p></p>

            </h3>        
        </div>

        <div>
            {celebrities.filter((celebrity)=>(celebrity.name.toLowerCase().includes(searchQuery.toLowerCase())))
                .map((celebrity)=>(
                <List setDisplayname={setDisplayname} key={celebrity.id} celebrity= {celebrity} handleupdate={handleupdate} handleDelete={handleDelete}  displayname={displayname}></List>
            ))}
        </div>

        
    </div>
  )
}

export default Lists