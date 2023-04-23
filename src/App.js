import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (msg, type) => {
   
    setAlert({
      message: msg,
      type: type
    })
    setTimeout(()=>{
      setAlert('');
    }, 1500)

    // console.log(msg);
  }
  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#050A30';
      showAlert("Dark mode has been enabled", "success");
      document.title = 'TextUtils - Dark Mode';
    }else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      document.title = 'TextUtils - Light Mode';


    }
  }
  return (
<div>
{/* <BrowserRouter> */}

<Navbar title="TextUtils" aboutText="about" toggleMode={toggleMode} mode={mode}></Navbar>
<Alert alert={alert}/>
{/* <Navbar/> */}
<div className="container my-3">
{/* <Routes>
    <Route path="/about" element={<About />}>
    </Route>
    <Route path="/" element={<TextForm heading="Enter text to analyze"  mode={mode} showAlert={showAlert} />}>
    </Route>
  </Routes> */}
{/* <About/> */}
<TextForm heading="Enter text to analyze"  mode={mode} showAlert={showAlert} />
</div>
{/* </BrowserRouter> */}

</div>

  );
}

export default App;
