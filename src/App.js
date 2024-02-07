import './App.css';
import { NavBar } from './components/navbar';
import { Banner } from './components/banner';
import { Particle } from './components/particle';
import { Skills } from './components/skills';
import { Project } from './components/project';
import { Footer } from './components/footer';
import 'animate.css';

function App() {
  return (
    <div className="App">
      <Particle />
      <NavBar />
      <Banner />
      <Skills />
      <Project />
      <Footer />
    </div>
  );
}

export default App;
