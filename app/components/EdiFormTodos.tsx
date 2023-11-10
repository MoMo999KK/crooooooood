"use client"

import { Todo } from "@prisma/client"

interface Props{
    todo:Todo | null
}

  
import { User } from "@prisma/client"

 
 
import client from "../libs/prisma";
import { updateThis, updateThisTodo, updateThisTodoTrue } from "../actions";
import { useFormStatus } from "react-dom";
import { useRouter } from "next/navigation";
import { useCallback } from "react";
 
const initialState = {
    message: null,
  }
   


 
 
 

const EdiFormTodos = ({todo}:Props) => {
  const { pending } = useFormStatus()
 


   

 
  
     
    // we have to make 2 functions fot that becuse it will not toggle
   

  return (
     <>
     {todo?.isCOmpleted ? ( <form action={updateThisTodo}  >
   
   <input type="hidden" name="id"  defaultValue={todo?.id} id="id"      />
   <input type="button" name="isCOmpleted"   defaultValue={todo?.isCOmpleted  }  id="isCOmpleted"      />

   <button type="submit" disabled={pending} className="ml-12"  >
     {pending ? "Submitting..." : "Submit"}
   </button>
   
 </form>) :(<form action={updateThisTodoTrue}  >
   
   <input type="hidden" name="id"  defaultValue={todo?.id} id="id"      />
   <input type="button" name="isCOmpleted"   defaultValue={todo?.isCOmpleted as any}  id="isCOmpleted"      />
   
   <button type="submit" className="ml-12" >
     edit now
   </button>
   
   </form>)}
   

  
   
  </>
  )
}

export default EdiFormTodos


