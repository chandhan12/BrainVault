import { BrowserRouter,Routes,Route } from "react-router-dom"
import Dashboard from "./pages/Dashboard"
import Signin from "./pages/Signin"
import Signup from "./pages/Signup"

const App = () => {
  return (
    <div>
     <BrowserRouter>
     <Routes>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/signin" element={<Signin/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  )
}

export default App
