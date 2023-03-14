
import Task from "./Task"
const Tasks = ( { tasks, onDelete, onToggle } ) => {

     return (
          <div className="bg-gray-100 shadow-2xl w-[95%] md:w-[45%] rounded-xl flex flex-wrap justify-around items-center my-10 md:my-0">
               { tasks.map( ( task ) => (
                    <Task key={ task.id }
                         task={ task }
                         onDelete={ onDelete }
                         onToggle={ onToggle } />
               ) ) }
          </div>

     )
}

export default Tasks
