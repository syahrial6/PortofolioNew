import { BrowserRouter,Routes,Route } from "react-router-dom"
import Home from "./Pages/Home"
import AboutMe from "./Pages/AboutMe"
import MyProject from "./Pages/MyProject"
import MySkill from "./Pages/MySkill"

function App() {
 

  return (
   <BrowserRouter>
    <Routes>
      <Route Component={Home} path="/"/>
      <Route Component={AboutMe} path="/about"/>
      <Route Component={MyProject} path="/project"/>
      <Route Component={MySkill} path="/experience"/>
    </Routes>
   </BrowserRouter>
  )
}

export default App
