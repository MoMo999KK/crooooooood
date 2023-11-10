// brigin the funvction that interact with databade
 
'use client'

import {  useFormState } from 'react-dom'
import { useFormStatus } from 'react-dom'
import { CreateLists, createTodo } from '@/app/actions'
import { Category } from '@prisma/client'
import { Carter_One } from 'next/font/google'
import ImageUpload from './image-upload'

const initialState = {
  message: null,
}
interface Props{
  categoris:Category [] | null
}

function SubmitButton() {
  const { pending } = useFormStatus()

  return (
    <button type="submit" aria-disabled={pending}>
      Add
    </button>
  )
}

export function AddTodos({categoris}:Props) {
  const [state, formAction] = useFormState(CreateLists, initialState)

  return (
    <form action={formAction}>
      <label htmlFor="name">Enter Task</label>
      <input type="text" id="name" name="name" required />

      <select name="categoryId" id="categoryId">
        {categoris?.map((category)=>(
          <option value={category.id  } key={category.id}>{category.title}</option>
        ))}


      </select>
         
                     
                     

    
      <SubmitButton />
      <p aria-live="polite" className="sr-only" role="status">
        {state?.message}
      </p>
    </form>
  )
}