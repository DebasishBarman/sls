// import './App.css';
import Header from './Header.js';
import { Container,Row,Col } from 'react-bootstrap';
import Home from './Home.js';
import Smallcards from './Smallcards.js';
import Custom from './Custom.js';
function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <Smallcards/>
      <Custom/>
    </div>
  );
}

export default App;
