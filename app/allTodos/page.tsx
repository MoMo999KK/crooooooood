import { BookCheck, CheckCheck, ShieldX } from "lucide-react"
import { getCategories, getTodos } from "../actions"
import { AddTodos } from "../components/add-todos"
import EdiFormTodos from "../components/EdiFormTodos"

 

async function Todos() {
    const data=await getTodos()
    const categoris=await getCategories()
    console.log(categoris)
  return (
    <div className="flex ">
        <AddTodos categoris={categoris}/>
        <div className=" flex flex-col mt-12  flex-1 bg-slate-400 shadow-lg mx-auto">
            {data.map((todo)=>(
                <div className="flex flex-col h-[200px] w-[200px] shadow-md bg-lime-100 items-center gap-y-5 border-b-slate-800" key={todo.id}>
                    <div className="text-sm">name:{todo.name}</div>
                    <div className="">its cmpleted:{todo.isCOmpleted ? <CheckCheck /> : <ShieldX />}</div>
                    <div className="">category:{todo.category.title}</div>
                    <EdiFormTodos todo={todo}/>
                </div>
            ))}
        </div>
        <div className="flex-2">
           

        </div>

    </div>
  )
}

export default Todos