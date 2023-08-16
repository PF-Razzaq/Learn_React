import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import {MyCom} from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/hello';
import Message from './components/Message';

class App extends Component {
  render(){ 
    return (
    <div className="App">
      <Message />
    </div>
  );
}
}
export default App;
