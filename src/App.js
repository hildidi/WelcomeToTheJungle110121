import logo from './logo.svg';
import './App.css';
import H1Component from './h1Component.js';

function App() {

///// for writing js  
const clickHandler=()=>{
  console.log("click-click")
}
/////js 


  return ( <div>
    
    <H1Component clickFunction={clickHandler}/>
    {/* <h1 onClick={clickHandler}>Woobly</h1> */}

  </div>);

//.addEventListener('click' ()=>{})


  }

export default App;
