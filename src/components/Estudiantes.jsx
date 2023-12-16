
import { useEffect, useState } from "react"

function Estudiantes()
{
   const [dataestudiantes, setDataEstudiantes] = useState([]);

   useEffect(() => {
      fetch('https://demobootcamp-vercel-api-node-postgress.vercel.app/students')
         .then(response => response.json())
         .then(data =>{
            console.log(data);
            setDataEstudiantes(data);
         })
   } ,[])

    return (
 <>
    <h2>Lista de Estudiantes</h2>
    {dataestudiantes && dataestudiantes.map((item, index) => (
      <div key={index}>
         {item.name}
         {item.lastname}
      </div>

    )) }

 </>       
    )

}

export default Estudiantes