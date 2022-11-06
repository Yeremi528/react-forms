import { Link } from 'react-router-dom'
export const Header = () => {
  return (
    <div className='py-10'>
        <div className='bg-gray-900 w-10/12 h-20 rounded m-auto flex justify-content items-center'>
            <nav className='mx-10 w-full'>
                <Link to={'/formik-component'}><h4>Formik-Components</h4></Link>
                
            </nav>
            
        </div>
    </div>
  )
}
