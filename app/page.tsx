import React from 'react'
import { getCountOnUsersAnd, getNames } from './actions'
import { AddForm } from './components/add-form'
import   { DeleteForm } from './components/delet-form'
import EditForm from './components/EditForm'
import Link from 'next/link'
import SearchComponent from './components/searchCOmponent'
import Dropzone from './components/Dropzone'

const Home = async() => {
  const allNames=await getNames()
  // showing the number of todos and the number of users at the same time!
  const allData=await getCountOnUsersAnd()
 






  return (
    <div className='flex w-4/6 mx-auto shadow-md bg-gray-400 rounded-md h-screen'>
      <div className="ml-[300px]">
          
      </div>
      <AddForm/>
      <div className="">
      
      {
        allNames.map((name)=>(
          <div className="h-10 shadow-lg w-10 flex items-center gap-2" key={name.id}>
           <Link href={`/names/${name.id}`}> <p>{name.name}</p></Link>
            <DeleteForm id={name.id} />
            <EditForm name={name}/>
           </div>
        ))
      }
    </div>
      <hr />
      <div className="mt-[200px] bg-red-400">
        number of users:{allData?.[0]}
        number of todos:{allData?.[1]}
        number of categories:{allData?.[2]}

      </div>
    </div>
  )
}

export default Home