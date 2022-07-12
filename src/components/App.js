import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Main } from '../containers/Container/Main';
import Toggler from './Toggler/Toggler';
import Home from '../pages/Home';
import About from '../pages/About';
import Stack from '../pages/Stack';
import Projects from '../pages/Projects';
import Contact from '../pages/Contact';
import Header from "./Header/Header";
import { useSelector } from 'react-redux';

const App = () => {
  const theme = useSelector(state => state.theme.theme);
  return ( 
    <Main theme={theme}>
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
      <Toggler/>
    </Main>
   );
}
 
export default App;