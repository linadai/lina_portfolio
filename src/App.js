import './App.scss';
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Timeline from './components/Timeline';

function App() {
  return (
    <>
    <Routes>
      <Route path="/lina_portfolio" element={<Layout />}>
        <Route index element={<Home/>}/>
        <Route path="lina_portfolio/about" element={<About/>}></Route>
        <Route path="lina_portfolio/ontact" element={<Contact/>}></Route>
        <Route path="lina_portfolio/timeline" element={<Timeline></Timeline>}></Route>
      </Route>
    </Routes>
    </>
    
  );
}

export default App;
