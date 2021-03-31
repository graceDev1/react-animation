
import NavBar from './components/navbar/navbar.component';
import { BrowserRouter as Router } from 'react-router-dom';
import GlobalStyle from './GlobalStyle';


function App() 
{
  return (
    <>
      <Router>
      <GlobalStyle/>
        <NavBar/>
      </Router>
    </>
  );
}

export default App;
