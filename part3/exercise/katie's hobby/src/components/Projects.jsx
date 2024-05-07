import data from './../data.json';
import { useState } from 'react';


export default function MyProjects () {
    const [index, setIndex] = useState(0);
    function handleClick() {
        if (index < data.projects.length-1)
        {
           setIndex(index + 1);
        }
        else 
        {
           setIndex(0);
        }
     }
    let myList = data.projects;
    let myItems = myList[index];

    return(
        <div>
            <button onClick = {handleClick}>
                Next
            </button>
            <h2>{myItems.Name} located in {myItems.Location} is {myItems.Length}</h2>
            <img src={myItems.photoURL} alt={myItems.Name} />
        </div>

    )
}