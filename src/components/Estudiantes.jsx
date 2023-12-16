
import { useEffect, useState } from "react"

function Estudiantes()
{
   useEffect(() => {
      fetch('https://demobootcamp-vercel-api-node-postgress.vercel.app/students')
         .then(response => response.json())
         .then(data =>{
            console.log(data);
         })
   } ,[])

    return (
 <>
    React and Git Working toge
 </>       
    )

}

export default Estudiantes