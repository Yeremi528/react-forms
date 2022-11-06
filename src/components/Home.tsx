import {Link} from "react-router-dom"


export const Home = () => {
  return (
    <div className='pt-10'>
        <div className='w-3/12 m-auto bg-gray-900 flex items-center justify-center h-16 rounded-t-lg'>
            <Link   to={"/"}>
                <h4 className="font-bold text-xl">Home</h4>
            </Link>
        </div>
    </div>
  )
}
