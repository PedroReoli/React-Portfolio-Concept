import RootLayout from './_root/RootLayout' 
import Home from "@/_root/pages/Home";
import About from "@/_root/pages/About";
import Portfolio from "@/_root/pages/Portfolio";
import SocialMedias from "@/_root/pages/SocialMedias";
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
            <Route path="SocialMedias" element={<SocialMedias />} />
           </Route>
        </Routes>
       
    </main>
  )
}

export default App