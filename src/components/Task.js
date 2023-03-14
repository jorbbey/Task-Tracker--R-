import { FaTimes } from 'react-icons/fa'
const Task = ( { task, onDelete, onToggle } ) => {

     const getRandomColor = () => {
          const color = "hsl(" + Math.random() * 360 + ", 100%, 75%)";
          return color;
     };
     const style = {
          backgroundColor: getRandomColor()
     }

     return (
          <div className={
               `${task.reminder ? 'border-r-4 border-green-700 my-4 mx-4 p-8 md:p-1 lg:p-4 rounded-lg cursor-pointer' :
                    'my-4 p-8 md:p-1 lg:p-4 mx-4 rounded-lg cursor-pointer' }` }
               onDoubleClick={ () => onToggle( task.id ) }
               style={ style }
               >
               <h3>
                    <p className='mx-4 md:text-sm lg:text-md'>{ task.text }</p>
               </h3>
               <p className='mx-4 md:text-sm lg:text-md'>{ task.day }</p>

               <div className='flex justify-center items-center absolute -ml-10 -mt-[95px] md:-mt-[60px] md:-ml-5 lg:-mt-[70px] lg:-ml-8 cursor-pointer text-xs w-[25px] h-[25px] rounded-full bg-gray-300 animate-ping-slow'>
                    <FaTimes
                         onClick={ () => onDelete( task.id ) }/>
               </div>
          </div>
     )
}

export default Task
