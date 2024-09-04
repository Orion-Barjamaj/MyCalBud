import { useState, createContext } from 'react'
import { Link } from "react-router-dom";
import './styles/App.css'

function App() {
  const [name, setName] = useState('');

  document.body.style.overflow = 'hidden';
  const html = document.querySelector('html');
  html.style.overflow = 'visible';

  const handleChange = (e) => {
    setName(e.target.value);
  }

  const handleSubmit = () => {
    localStorage.setItem("name", name);
  }

  return(
    <>
      <div className="glassContainer fade-In-Animation">
        <h1 className='welcomeHeader'>Welcome to MyCalBud!</h1>
        <label className='enterNameLabel'>Please enter your name so we can address you properly.</label>
        <input type='text' className='nameInput' name='name' required placeholder="Enter your name..."onChange={(event) => handleChange(event)}></input>
        <Link to='Calorie-Calculator'><button className='startBtn' disabled={name === ''} onClick={() => handleSubmit()}>Let's Get Started</button></Link>
      </div>
      <div className="fruits apple opacity-In-Animation"></div>
        <div className="fruits orange opacity-In-Animation"></div>
        <div className="fruits strawberry opacity-In-Animation"></div>
        <div className="fruits watermelon opacity-In-Animation"></div>
        <div className="fruits avocado opacity-In-Animation"></div>
        <div className="fruits peach opacity-In-Animation"></div>
        <div className="fruits pear opacity-In-Animation"></div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className='waves'>
          <path fill="#7FB685" fillOpacity="1" d="M0,64L40,64C80,64,160,64,240,96C320,128,400,192,480,186.7C560,181,640,107,720,85.3C800,64,880,96,960,138.7C1040,181,1120,235,1200,229.3C1280,224,1360,160,1400,128L1440,96L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path>
        </svg>
        <div className='credits'>Made by <a href='https://github.com/Orion-Barjamaj' target='_blank' className='nameLink'>Orion Barjamaj</a></div>
    </>
  )
}

export default App;