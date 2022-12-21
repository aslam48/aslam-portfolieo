import './App.css';
import Header from './Component/header/Header.jsx'
import Home from './Component/Home/Home.jsx'
import About from './Component/about/About.jsx'
import Skills from './Component/skills/Skills';
import Service from './Component/service/Service';




function App() {
  return (
    <>
     <Header/>

      {/* home */}
     <main className='main'>
     <Home/>
     <About/>
     <Skills/>
     <Service/>
     </main>
    </>
  );
}

export default App;
