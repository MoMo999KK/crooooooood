  "use client"
import { User } from "@prisma/client"

 
 
import client from "../libs/prisma";
import { updateThis } from "../actions";
import { useFormStatus } from "react-dom";
import { useRouter } from "next/navigation";
import { useCallback } from "react";
interface Props{
  
    name:User | null | undefined
}
const initialState = {
    message: null,
  }
   


 
 
 

const EditForm = ({name}:Props) => {
  const { pending } = useFormStatus()
  const router=useRouter()



   

 
  
     
    
   

  return (
    <form action={updateThis}  >
   
    <input type="hidden" name="id"  defaultValue={name?.id} id="id"      />
    <input type="text" name="name"  defaultValue={name?.name!} id="name"    required  />
 
    <button type="submit" disabled={pending}  >
      {pending ? "Submitting..." : "Submit"}
    </button>
    
  </form>
  )
}

export default EditForm