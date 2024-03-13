import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './pages/about/About';
import Webapp from './pages/webapp/Webapp';
import Staff from './pages/staff/Staff';
import MVP from './pages/mvp/MVP';
import Analytic from './pages/analytic/Analytic';
import AI from './pages/ai/AI';

const App = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/webapp" element={<Webapp />} />
                <Route path="/staff" element={<Staff />} />
                <Route path="/mvp" element={<MVP />} />
                <Route path="/data" element={<Analytic />} />
                <Route path="/ai" element={<AI />} />
            </Routes>

            <Footer />
        </>
    );
};

export default App;
