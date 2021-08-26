// Photos.js
import React from "react";
import { useFetch } from "./hooks";
function Albums() {
  const [data, loading] = useFetch(
    "https://jsonplaceholder.typicode.com/photos?albumId=1"
    
  );
  return (
    <div>
    <h1 style={{textAlign:"center"}}>Albums</h1>
    <div className="albums">
      
    
    <>
      
      {loading ? (
        "Loading..."
      ) : (
        <div>
          {data.map(({ id, title, url }) => (
            <span key={`photo-${id}`}>
              <img alt={title} src={url} style={{height:"10%", width:"10%"}} />                           
            </span>
           
          ))}
      </div>
      )}
    </>
    </div>
    </div>
  
  );
}
export default Albums;