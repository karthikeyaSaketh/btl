
import './App.css';
import ImgSlider from './Components/ImgSlider';
import Navbar from './Components/Navbar';
import Events from './Components/Events';
import Footer from './Components/Footer';

function App() {
  return (
    <div className='flex flex-col align-center justify-center w-full'>
      <Navbar/>
      <ImgSlider/>
      <Events/>
      <Footer/>

    </div>
    
  );
}

export default App;
