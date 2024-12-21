import { BrowserRouter,Routes,Route } from "react-router-dom"
import Dashboard from "./pages/Dashboard"
import Signin from "./pages/Signin"
import Signup from "./pages/Signup"
import { RecoilRoot } from "recoil"
import ShareLink from "./pages/ShareLink"
import HomePage from "./pages/HomePage"

const App = () => {
  return (
    <div>
     <BrowserRouter>
     <Routes>
      <Route path="/brain/share/:id" element={<ShareLink/>}/>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/signin" element={<Signin/>}/>
      <Route path="/dashboard" element={ <RecoilRoot><Dashboard/></RecoilRoot>}/>
     </Routes>
     </BrowserRouter>
    </div>
  )
}

export default App
