import { useQuery } from "@tanstack/react-query";
import axios from "axios"
import { Register } from "./formularios/Register";

function App() {
  const {data,status,error} = useQuery(['users'],() => axios.get('https://jsonplaceholder.typicode.com/users').then((x) => x.data))
  
  if(status === 'loading') return <h4>Loading</h4>

  if(error) return <h4>Error</h4>
  
  
    return (
    <div className="bg-gray-800 h-screen w-full text-white">
      <Register/>
      {data ? data.map((user:any) => <div>{user.name}</div>)  : <h4>No existe</h4>}
    </div>
    );
  
  
}

export default App;
