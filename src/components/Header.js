import Button from "./Button"

const Header = ( { title } ) => {
     return (
          <Header className='header'>
               <h1>{ title }</h1>
             <Button color='green' text='Add' />
          </Header>
     )
}

export default Header
