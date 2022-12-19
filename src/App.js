import './App.css';
import Header from './Component/header/Header.jsx'
import Home from './Component/Home/Home.jsx'
import About from './Component/about/About.jsx'
import Skills from './Component/skills/Skills';




function App() {
  return (
    <>
     <Header/>

      {/* home */}
     <main className='main'>
     <Home/>
     <About/>
     <Skills/>
     </main>
    </>
  );
}

export default App;
