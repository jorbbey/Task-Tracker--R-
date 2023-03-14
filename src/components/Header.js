import { FaPlus, FaTimes } from 'react-icons/fa'
const Header = ( { title, onAdd, addTaskTab } ) => {

     return (
          <header className='flex justify-around items-center my-10 w-full md:w-[50%] '>
               <h1 className='text-3xl font-semibold'>{ title }</h1>
               <div className=''>
                    {
                         addTaskTab ? (
                              <FaTimes className='cursor-pointer text-2xl text-red-600 animate-bounce'
                                   onClick={ onAdd } />
                         ) : (
                              <FaPlus className='cursor-pointer text-2xl text-green-600 animate-bounce'
                                   onClick={ onAdd } />
                         )
                    }
               </div>
          </header>
     )
}

export default Header
