import RootLayout from './_root/RootLayout' 
import Home from "@/_root/pages/Home";
import About from "@/_root/pages/About";
import Skills from "@/_root/pages/Skills";
import Experiences from "@/_root/pages/Experiences";
import Portfolio from "@/_root/pages/Portfolio";
import Contact from "@/_root/pages/Contact";
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
            <Route path="skills" element={<Skills />} />
            <Route path="experiences" element={<Experiences />} />
            <Route path="portfolio" element={<Portfolio />} />
            <Route path="contact" element={<Contact />} />
            <Route path="socialmedia" element={<SocialMedias />} />
           </Route>
        </Routes>
       
    </main>
  )
}

export default App