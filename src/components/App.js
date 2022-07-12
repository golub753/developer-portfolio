import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Stack from '../pages/Stack';
import Projects from '../pages/Projects';
import Contact from '../pages/Contact';
import Header from "./Header/Header";

const App = () => {

  return ( 
    <>
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/stack' element={<Stack/>}/>
          <Route path='/projects' element={<Projects/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
      </Router>
    </>
   );
}
 
export default App;