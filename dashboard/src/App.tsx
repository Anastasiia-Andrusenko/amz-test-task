import { Suspense } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';

import Navigation from "./components/Navigation";
import HomePage from "./pages/Home/HomePage";
import DashboardPage from "./pages/Dashboard/DashboardPage";
import AboutPage from "./pages/About/AboutPage";
import Footer from './components/Footer';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';

const App: React.FC = () => {
    return <>
        <Suspense fallback={null}>
            <Router>
                <Navigation/>
                <Routes>
                    <Route path='/' element={<HomePage/>}/>
                    <Route path='/dashboard' element={<DashboardPage/>}/>
                    <Route path='/about' element={<AboutPage/>}/>
                    <Route path='*' element={<NotFoundPage/>}/>
                </Routes>
            </Router>
            <Footer/>
        </Suspense>
    </>
};


export default App;
