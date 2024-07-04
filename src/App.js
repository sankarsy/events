import './App.css';
import Hero from './component/Hero';
import Navbar from './component/Navbar';
import Puja from './component/Puja';
import Services from './component/Services';

function App() {
  return (
    <div>
      <Navbar/>
      {/* <Hero/> */}
      <Puja/>
      <Services/>
    </div>
  );
}

export default App;
