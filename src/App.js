import Form from './Form';
import Details from './Details';
import Reverse from './Reverse';
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';
function App() {
  return (
    <>
      <Router>
        <Link to='/form'>Form |</Link>
        <Link to='/details'>Details |</Link>
        <Link to='/reverse'>Reverse String  |</Link>
        <Routes>
          <Route path='/' element={<Form/>}></Route>
          <Route path='/form' element={<Form/>}></Route>
          <Route path='/details' element={<Details/>}></Route>
          <Route path='/reverse' element={<Reverse/>}></Route>
        </Routes>
      </Router>
      
    </>
  );
}

export default App;
