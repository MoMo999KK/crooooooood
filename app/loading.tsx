import { Loader } from 'lucide-react'
import React from 'react'

const loading = () => {
  return (
    <div className='flex justify-center items-center h-screen w-screen animate-spin'><Loader /></div>
  )
}

export default loading