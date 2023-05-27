import {BrowserRouter,Routes,Route} from "react-router-dom";
import {About,Contact,Experience,Feedbacks,Hero,Navbar,Works,StarsCanvas, Tech}from './components'
function App() {
return (
    <BrowserRouter>
    <div className='relative z-0 bg-primary'>
      <div className='bg-hero-pattern pattern bg-cover bg-no-repeat bg-center'>
        <Navbar/>
        <Hero/>
      </div>
      <About/>
      <Tech/>
      <Works/>
      <div className='relative z-0'>
        <Contact/>
        <StarsCanvas/>
        </div>  
    </div>
    </BrowserRouter>
  )
}

export default App
