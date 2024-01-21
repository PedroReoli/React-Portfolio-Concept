import Home  from "@/_root/pages/Home";
import { Routes,Route } from 'react-router-dom';
import RootLayout from './_root/RootLayout' 
import './globals.css'
const App = () => {
  return (
    <main className='flex h-screen'>
        <Routes>
                <Route element={<RootLayout />}>
                    <Route index element={<Home />} />
                </Route>
        </Routes>
       
    </main>
  )
}

export default App