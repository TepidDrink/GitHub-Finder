import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Footer from './components/layout/Footer'
import Navbar from './components/layout/Navbar'
import { AlertProvider } from "./context/alert/AlertContext";
import { GitHubProvider } from "./context/github/GitHubContext";
import About from './pages/About'
import Home from './pages/Home'
import NotFound from './pages/NotFound'

function App() {
  return (
    <GitHubProvider>
      <AlertProvider>
        <Router>
          <div className='flex flex-col justify-between h-screen'>
            <Navbar/>

            <main className='container mx-auto px-3 pb-12'>
              <Routes>
                <Route path='/' element={ <Home/> }></Route>
                <Route path='/about' element={ <About/> }></Route>
                <Route path='/notfound' element={ <NotFound/> }></Route>
                <Route path='/*' element={ <NotFound/> }></Route>
              </Routes>
            </main>

            <Footer/>
          </div>
        </Router>
      </AlertProvider>
    </GitHubProvider>
  )
}

export default App
