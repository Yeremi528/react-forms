import { Register } from "./formularios/Register";
import {DynamicForm} from "./formularios/DynamicForm"
import { Header } from "./components/Header";
import {BrowserRouter,Route,Routes} from "react-router-dom"
import { Home } from "./pages/Home";

function App() {

  
    return (
    <div className="bg-gray-800 h-screen w-full text-white">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/dynamic-form" element={<DynamicForm />}/>
          <Route path="/formik-component" element={<Register/>} />
        </Routes>
      </BrowserRouter>
    </div>
    );
  
  
}

export default App;
