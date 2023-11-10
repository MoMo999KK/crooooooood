'use server'
 import * as z from "zod"
import { revalidatePath, revalidateTag } from 'next/cache'
 
import client from "./libs/prisma"
import { Todo } from "@prisma/client"
export async function createTodo(prevState: any, formData: FormData) {
    const schema = z.object({
      name: z.string().min(1),
    })
    const data = schema.parse({
      name: formData.get('name'),
    })
  
    try {
      await client.user.create({
        data:{
          name:data.name
             
        }
      })
    }
    
    
    
    
    catch   {
      console.log("something went wrong")
    }finally{
       revalidatePath("/")

     }
  }
  export const getNames=async()=>{
    const names=await client.user.findMany({
      orderBy:{
        createdAt:"asc"
      }
    })
    return names
  }

  export async function deleteTodo(prevState: any, formData: FormData) {
    const schema = z.object({
      id: z.string().min(1),
     })
    const data = schema.parse({
      id: formData.get('id'),
     })
  
    try {
   await client.user.delete({
    where:{
      id:data.id
    }

   })
  
      
    } catch (e) {
      return { message: 'Failed to delete todo' }
    }finally{
      revalidatePath('/')

    }
  }

  export async function updateThis(formData: FormData) {
   
    try {
      
   
    await client.user.update({
     
      where:{
        id:formData.get("id") as string
      },data:{
        
        name:formData.get("name") as string

              
          }
      });
      
    } catch (error) {
      
    }
    finally{
      revalidatePath('/')
      
    }
  
    }

    export async function findByIdTheName(formData: FormData) {
      
      try {
        
     
     const singleName= await client.user.findUnique({
       
        where:{
          id:formData.get("id") as string
        } 
        });
        
        return singleName
      } catch (error) {
        
      }
    
    
      }
      //add todos
      export async function CreateLists(prevState: any, formData: FormData) {
        const schema = z.object({
          name: z.string().min(1),
          categoryId: z.string().min(1),
        
        })
        const data = schema.parse({
          name: formData.get('name'),
          categoryId: formData.get('categoryId'),
           
        })
      
        try {
          await client.todo.create({
            data:{
              name:data.name,
              categoryId:data.categoryId,
             
                 
            }
          })
        }
        
        
        
        
        catch   {
          console.log("something went wrong")
        }finally{
           revalidatePath("/allTodos")
    
         }
      }

      export const getTodos=async()=>{
        const names=await client.todo.findMany({
          orderBy:{
            createdAt:"asc"
          },
          include:{
            category:true
          }
        })
        return names
      }


      //update bboleac

      
      export async function updateThisTodo(formData: FormData) {
   
        try {
          
       
        await client.todo.update({
         
          where:{
            id:formData.get("id") as string
          },
          data:{
            
            isCOmpleted:false
    
                  
              }
          });
          
        } catch (error) {
          
        }
        finally{
          revalidatePath('/')
          
        }
      
        }
        export async function updateThisTodoTrue(formData: FormData) {
   
        try {
          
       
        await client.todo.update({
         
          where:{
            id:formData.get("id") as string
          },
          data:{
            
            isCOmpleted:true
    
                  
              }
          });
          
        } catch (error) {
          
        }
        finally{
          revalidatePath('/')
          
        }
      
        }
        //getCategories
        export const getCategories=async()=>{
          const names=await client.category.findMany({
            
          })
          return names
        }
        




        //transaton methois for showing both number of users and th number of todos
        export const getCountOnUsersAnd=async()=>{
         try {
          const users= client.user.count({
            
          })
          const categories=client.category.count({})
          const tosdos=client.todo.count({})
          const result =await client.$transaction([users,tosdos,categories])
          return result
          
          
         } catch (error) {
          
         }  finally{
          revalidatePath("/")

         }
       



        }

        //testing the yt way to rest the form 
        export async function createTestTodos(data:any,imageUrl:string){
          
          try {
            const newTodo=await client.user.create({
              data:{
              name:data.name,imageUrl
              }
            })
            return newTodo
            
          } catch (error) {
            throw new Error( "failed to crete a todo")
            
          }finally{
            console.log("well done")
          }
          }




           


 