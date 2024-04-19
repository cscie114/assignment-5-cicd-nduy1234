import * as React from "react"
import '../../style.css'
 
const Park = ({park}) =>{  
  return (
    <div>  
      <p>{park.description}</p>
      <p>Visit here: <a href={park.url}>nps.gov/{park.parkCode}</a></p>
      <img src={park.images[0].url} className="parkimage" alt={park.images[0].title} />
      <p>{park.images[0].title}</p>     
    </div>
  )
} 

export default Park;
