import { FaPlus, FaTimes } from 'react-icons/fa'
const Header = ( { title, onAdd, addTaskTab } ) => {
     return (
          <header className='flex flex-col md:flex-row justify-between items-center my-10 w-full md:w-[40%]'>
               <div className='flex justify-around items-center w-3/4'>
                    <img src={ require( '../assets/logo.gif' ) } alt="loading..." className='w-10 md:w-16 lg:w-20 rounded-full' />
                    <h1 className='text-3xl font-semibold cursor-pointer'>{ title }</h1>
             </div>
               <div className='my-16 md:my-0'>
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
