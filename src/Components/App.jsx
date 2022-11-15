import '../App.css';
import Navbar from './Navbar';
import Content from './mainContent';
import Projects from './Projects';
import Certifications from './Certifications';
import Youtube from './Youtube';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Content/>
      <Projects/>
      <Certifications/>
      <Youtube/>
      <Footer/>
    </div>
  );
}

export default App;