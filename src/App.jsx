import './App.css'
import BlockSelector from './components/BlockSelector/BlockSelector';
import BreadCrumbs from './components/BreadCrumbs/BreadCrumbs';
import CourseBigCards from './components/CourseBigCards/CourseBigCards';
import Header from './components/Header/Header'
import TitleHeader from './components/TitleHeader/TitleHeader'
import Courts from './pages/Courts/Courts';
import Extracurriculars from './pages/Extracurriculars/Extracurriculars';
import Home from './pages/Home/Home'
import {
    BrowserRouter,
    Routes,
    Route,
    Link,
    useLocation
} from 'react-router-dom';
import Selections from './pages/Selections/Selections';
import Gyms from './pages/Gyms/Gyms';
import Equipment from './pages/Equipment/Equipment';
import { ToastContainer } from 'react-toastify';

const Layout = () => {
    const location = useLocation()
    return (
        <div className='space-y-3'>
            <TitleHeader />
            {location.pathname !== '/' && <Header />}
            {location.pathname !== '/' && <BreadCrumbs />}
        </div>
    )
}

function App() {
    return (
        <BrowserRouter >
            <Layout />
            <ToastContainer position="top-right" autoClose={3000} hideProgressBar={true} />
            <Routes>
                <Route path="/" element={<div className='flex h-screen'><Home /></div>} />
                <Route path="/talleres" element={<Extracurriculars />}/>
                <Route path="/selecciones" element={<Selections />} />
                <Route path="/gimnasio" element={<Gyms/>}/>
                <Route path="/canchas" element={<Courts />} />
                <Route path="/talleres/:extracurricularName" element={<CourseBigCards />} />
                <Route path="/canchas/:canchaName" element={<BlockSelector />} />
                <Route path="/gimnasio/:gymName" element={<BlockSelector />} />
                <Route path="/gimnasio/Equipamiento" element={<Equipment />} />
            </Routes>
        </BrowserRouter >
    )
}

export default App
// <>
//     <div className='px-4'>
//         <TitleHeader />
//         <Header />
//     </div>
//     <div className='flex h-screen'>
//         <Home />
//     </div>
// </>
