import { useState } from "react"

const AddTask = ( { onAdd } ) => {
     const [ text, setText ] = useState( '' )
     const [ day, setDay ] = useState( '' )
     const [ reminder, setReminder ] = useState( false )

     const onSubmit = ( e ) => {
          e.preventDefault()

          if ( !text )
          {
               alert( 'Please add task' )
               return
          }
          onAdd( { text, day, reminder } )
          setText( '' )
          setDay( '' )
          setReminder( false )
     }
     return (
          <div className="my-5 h-auto shadow-2xl rounded-xl bg-gray-100">
               <form className='my-10 mx-10' onSubmit={ onSubmit }>
                    <div className='flex justify-center items-center'>
                         {/* <label htmlFor="">Task</label> */ }
                         <input type="text"
                              placeholder='Add Task'
                              value={ text }
                              onChange={ ( e ) => setText( e.target.value ) }
                              className='w-full md:w-5/6 h-10 border-2 border-gray-600 bg-transparent my-10 rounded-lg' />

                    </div>

                    <div className='flex justify-center items-center w-full'>
                         {/* <label htmlFor="">Day & Time</label> */ }
                         <input type="text"
                              placeholder='Add Day & Time'
                              value={ day }
                              onChange={ ( e ) => setDay( e.target.value ) }
                              className='w-full md:w-5/6 h-10 border-2 border-gray-600 bg-transparent mb-5 rounded-lg' />
                    </div>

                    <div className='flex justify-around items-center w-full mt-6 bg-gray-200 p-3 rounded-lg'>
                         <label htmlFor="">Set reminder</label>
                         <input type="checkbox"
                              checked={ reminder }
                              value={ reminder }
                              onChange={ ( e ) => setReminder( e.currentTarget.checked ) } />
                    </div>

                    <div className="flex justify-center items-center w-full">
                         <input type="submit"
                              value='Save Task'
                              className='btn btn-block my-10 p-3 w-full' />
                    </div>

               </form>

          </div>
               )
}

export default AddTask
