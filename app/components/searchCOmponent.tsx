"use client"

import { useCustomROuter } from "../hooks/use-customrouter"

const SearchComponent = () => {
    const {pushQuery,query}=useCustomROuter()
    
    async function handelSearch(formData:FormData){
        const search=formData.get("search")
pushQuery({search})
    }
  return (
    <div>
        <form action={handelSearch}>
            <input type="search"  name='search' placeholder='search ' required/>
            <button type='submit'>submit</button>
        </form>
    </div>
  )
}

export default SearchComponent