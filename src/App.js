/* eslint-disable jsx-a11y/iframe-has-title */
import { useState, useEffect } from "react"
import Header from "./components/Header"
import Tasks from "./components/Tasks"
import AddTask from "./components/AddTask"
import Animations from "./components/Animations"
import Footer from "./components/Footer"
const tasksData = 'http://localhost:5000/tasks'
const App = () => {
     const [ addTaskTab, setAddTastTab ] = useState( false )
     const [ tasks, setTasks ] = useState( [] )

     const fetchTasks = async () => {                       // fetch tasks data
          const res = await fetch( tasksData )
          const data = await res.json()
          // console.log( data );
          return data
     }

     fetchTasks()

     // fetch task for toggle reminder
     const fetchTask = async ( id ) => {                       // fetch tasks data
          const res = await fetch( `${ tasksData }/${ id }` )
          const data = await res.json()
          // console.log( data );
          return data
     }

     useEffect( () => {
          const getTasks = async () => {
               const tasksFromServer = await fetchTasks()
               setTasks( tasksFromServer )
          }
          getTasks()
     }, [] )

     // add task
     const addTask = async ( task ) => {
          const res = await fetch( tasksData, {
               method: 'POST',
               headers: {               // data is being added so content type needs to be specified
                    'Content-type': 'application/json'
               },
               body: JSON.stringify( task )      // convert JS object to JSON string
          } )

          const data = await res.json()
          setTasks( [ ...tasks, data ] )

          // const id = Math.floor( Math.random() * 10000 ) + 1
          // const newTask = { id: id, ...task }
          // setTasks( [ ...tasks, newTask ] )
     }

     // delete task
     // DELETE request before filter on the UI - deletes the tasks permanently from the UI
     const deleteTask = async ( id ) => {
          await fetch( `${ tasksData }/${ id }`, {
               method: 'DELETE'
          } )

          setTasks( tasks.filter( ( task ) => task.id !== id ) )
          // console.log( 'delete', id );
     }

     // reminder toggle
     const toggleReminder = async ( id ) => {
          const taskToToggle = await fetchTask( id )             // grab task to toggle
          const updatedTask = {
               ...taskToToggle,
               reminder: !taskToToggle.reminder
          }

          const res = await fetch( `${ tasksData }/${ id }`, {
               method: 'PUT',
               headers: {
                    'Content-type': 'application/json'
               },
               body: JSON.stringify( updatedTask )
          }
          )

          const data = await res.json

          setTasks(
               tasks.map( ( task ) =>
                    task.id === id ? { ...task, reminder: data.reminder } : task )
          )
     }
     return (
          <div className="w-full flex justify-center items-center bg-red-200">
               <div className="w-[95%] md:w-[90%] bg-white h-auto my-32 rounded-xl">
                    <Header title='Task Tracker'
                         addTaskTab={ addTaskTab }
                         onAdd={ () => setAddTastTab( !addTaskTab ) } />
                    
                    <div className="flex flex-col md:flex-row justify-around items-center">
                         <div className="h-auto w-[95%] md:w-[40%]">
                              { addTaskTab ? '' : <Animations /> }
                              { addTaskTab && ( <AddTask onAdd={ addTask } /> ) }
                         </div>
                         { tasks.length > 0 ? (
                              <Tasks tasks={ tasks }
                                   onDelete={ deleteTask }
                                   onToggle={ toggleReminder }
                                   />
                         ) : (
                              <p className="text-gray-400 my-16 mx-16">Click the button above to add a task</p>
                         ) }
                    </div>


                    <Footer />
               </div>
          </div>
         
          
     )
}

export default App
