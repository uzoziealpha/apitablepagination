import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Layout from './components/Layout';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


function App() {
  return (
    <div className="App">
   <Navbar/>
   <Layout/>

    </div>
  );
}

export default App;
