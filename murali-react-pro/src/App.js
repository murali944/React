import logo from './logo.svg';
import './App.css';
import Helloworld from './components/helloworld';
import Greet from './components/Greet';
import Person from './components/Person';
import PersonFunctinalComponent from './components/PersonFunctionalComponent';
import Message from './components/Message';
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
      {/*<header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
  </header>*/}
      <Helloworld></Helloworld>
      <Greet name="Ram"></Greet>
      <Greet name="Sita"></Greet>
      <Greet name="Laxman"></Greet>

      <Person name = "Murali" age ="34"></Person>

      <Person name = "Ravi" age ="32"></Person>

      <h1>Using Functional Component :</h1>
      <PersonFunctinalComponent name = "Murali" age ="34"> </PersonFunctinalComponent>
      <br></br>
      <PersonFunctinalComponent name = "Ravi" age ="32"> </PersonFunctinalComponent>

      <Message></Message>
      <Counter></Counter>
    </div>
  );
}

export default App;