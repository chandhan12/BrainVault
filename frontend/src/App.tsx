import { BrowserRouter,Routes,Route } from "react-router-dom"
import Dashboard from "./pages/Dashboard"
import Signin from "./pages/Signin"
import Signup from "./pages/Signup"
import { RecoilRoot } from "recoil"
import ShareLink from "./pages/ShareLink"

const App = () => {
  return (
    <div>
     <BrowserRouter>
     <Routes>
      <Route path="/brain/share/:id" element={<ShareLink/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/signin" element={<Signin/>}/>
      <Route path="/dashboard" element={ <RecoilRoot><Dashboard/></RecoilRoot>}/>
     </Routes>
     </BrowserRouter>
    </div>
  )
}

export default App
