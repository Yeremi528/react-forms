import { Register } from "./formularios/Register";
import { Header } from "./components/Header";
import {BrowserRouter,Route,Routes} from "react-router-dom"

function App() {

  
    return (
    <div className="bg-gray-800 h-screen w-full text-white">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/formik-component" element={<Register/>} />
        </Routes>
      </BrowserRouter>
    </div>
    );
  
  
}

export default App;
