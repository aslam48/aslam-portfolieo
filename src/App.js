import './App.css';
import Header from './Component/header/Header.jsx'
import Home from './Component/Home/Home.jsx'

function App() {
  return (
    <>
     <Header/>

      {/* home */}
     <main className='main'>
     <Home/>
     </main>
    </>
  );
}

export default App;
