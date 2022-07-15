import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Main } from '../containers/Container/Main';
import Toggler from './Toggler/Toggler';
import Home from '../pages/Home';
import About from '../pages/About';
import Stack from '../pages/Stack';
import Projects from '../pages/Projects';
import Contact from '../pages/Contact';
import Header from "./Header/Header";
import Footer from './Footer/Footer';
import Loader from './Loader/Loader';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

const App = () => {
  const [loading, setLoading] = useState(true);
  const theme = useSelector(state => state.theme.theme);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1500)
  }, [])
  return ( 
    (loading) ? <Loader/>
      : 
      <Main theme={theme}>
      <Router>
        <Header/>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/stack' element={<Stack/>}/>
          <Route path='/projects' element={<Projects/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
        <Footer/>
      </Router>
      <Toggler/>
    </Main>
    
   );
}
 
export default App;