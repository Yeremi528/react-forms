import { Link } from 'react-router-dom'
import { Home } from './Home'
export const Header = () => {
  return (
    <div>
      <Home/>
      <div className='pb-10'>
        <div className='bg-gray-900 w-10/12 h-20 rounded m-auto flex justify-content items-center'>
            <nav className='mx-10 w-full flex gap-6'>
                <Link to={'/formik-component'}><h4>Formik-Components</h4></Link>
                <Link className='' to={'/dynamic-form'}><h4>Dinamic-Forms</h4></Link>
            </nav>
            
        </div>
    </div>
    </div>
    
  )
}
