// import logo from './logo.svg';
import './App.css';
let name = "Zeeshan Malik";
function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    
    //this empty brases means we cant use two tags in this func so we use jsx fragments for using maximum tags.
    <>         
    <nav className='navbar'>
        <li>home</li>
        <li>about</li>
        <li>contact</li>
    </nav>
    <div className="blank">
       <h1>Nothing</h1>
       <p>My name is <b>{name}</b></p>
    </div>
    </>
    
  );
}

export default App;
