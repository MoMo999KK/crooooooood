'use client'
import client from "../libs/prisma"

interface Props{
    id:string | undefined
}

 
  


import { useFormState, useFormStatus } from 'react-dom'
import { deleteTodo } from '@/app/actions'

const initialState = {
  message: null,
}

function DeleteButton() {
  const { pending } = useFormStatus()

  return (
    <button type="submit" aria-disabled={pending}>
      Delete
    </button>
  )
}

export function DeleteForm({ id }:Props) {
  const [state, formAction] = useFormState(deleteTodo, initialState)

  return (
    <form action={formAction}>
      <input type="hidden" name="id" value={id} />
   
      <DeleteButton />
      <p aria-live="polite" className="sr-only" role="status">
        {state?.message}
      </p>
    </form>
  )
}