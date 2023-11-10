import { findByIdTheName } from '@/app/actions'
import HandelDetailsShow from '@/app/components/handelshowDetails'
import client from '@/app/libs/prisma'
import React from 'react'

const NameDetails = async({
  params
}: {
  params: { nameId: string }
}) => {

  
  
    
     
  return (
    <div>
      <HandelDetailsShow id={params.nameId}/>



    </div>
  )
}

export default NameDetails