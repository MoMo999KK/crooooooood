 "use client"
import { useFormState, useFormStatus } from 'react-dom'
import ImageUpload from '../components/image-upload'
import { createTestTodos, createTodo } from '../actions'
import {useState} from "react"
import { revalidatePath } from 'next/cache'
import client from '../libs/prisma'

const initialState = {
    message: null,
  }
  
  const Antonio = () => {
    const [imageUrl,setImageUrl]=useState("")
    const [state, formAction] = useFormState(createTestTodos, initialState)

    
 
   

  return (
    <div>
        <form action={createTestTodos}>
            <input type="text" name='name' />
            <ImageUpload value={"imageUrl"}  name='imageUrl'  onChange={(imageUrl) => setImageUrl(imageUrl)}  label="Upload profile image" /> 
            <button type='submit'>submit</button>
                   </form>

m    </div>
  )
}

export default Antonio