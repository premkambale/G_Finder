import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from './components/layout/Navbar';
import Footer from "./components/layout/Footer"
import Home from './Pages/Home';
import About from './Pages/About';
import NotFound from './Pages/NotFound';
import { GitProvider } from "./git_context/Gitcontext"
import { AlertProvider } from './alertContext/AlertContext';
import AlertBox from './components/layout/AlertBox';
import User from './components/Users/User';

function App() {
  return (
    <>
      <GitProvider>
        <AlertProvider>
          <BrowserRouter>
            <div className='layout-main'>
              <Navbar />
                <main style={{ color: "white", height: "80vh" , overflowY:"scroll"}} className="container mx-auto px-2 mb-3">
                  <Routes>

                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/about" element={<About />} />
                    <Route exact path="/user/:id" element={<User />} />
                    <Route exact path="/notfound" element={<NotFound />} />
                    <Route exact path="/*" element={<NotFound />} />

                  </Routes>
                </main>
              <Footer />
            </div>
          </BrowserRouter>
        </AlertProvider>
      </GitProvider>
    </>
  );
}

export default App;
