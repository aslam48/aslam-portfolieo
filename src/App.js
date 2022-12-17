import './App.css';
import Header from './Component/header/Header.jsx'
import Home from './Component/Home/Home.jsx'
import About from './Component/about/About.jsx'




function App() {
  return (
    <>
     <Header/>

      {/* home */}
     <main className='main'>
     <Home/>
     <About/>
     </main>
    </>
  );
}

export default App;
