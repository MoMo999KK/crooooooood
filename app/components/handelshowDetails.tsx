

import { findByIdTheName } from "../actions"
import client from "../libs/prisma";

interface Props{
    id:string | undefined
}

const HandelDetailsShow = async({id}:Props) => {
    const myData=await client.user.findFirst({
        where:{
            id
        }
    })
    console.log(id)
   
 
    

  return (
    <div>
       
        <p>{myData?.name}</p>
    </div>
  )
}

export default HandelDetailsShow