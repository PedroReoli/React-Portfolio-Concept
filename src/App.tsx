import RootLayout from './_root/RootLayout' 
import Home from "@/_root/pages/Home";
import About from "@/_root/pages/About";
import Portfolio from "@/_root/pages/Portfolio";
import Contact from "@/_root/pages/Contact";
import { Routes,Route } from 'react-router-dom';
import './globals.css'
const App = () => {
  return (
    <main className='flex h-screen'>
        <Routes>
           <Route path="/" element={<RootLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="portfolio" element={<Portfolio />} />
            <Route path="contact" element={<Contact />} />
           </Route>
        </Routes>
       
    </main>
  )
}

export default App