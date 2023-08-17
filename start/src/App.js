import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import MyCom from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/hello';
import Message from './components/Message';
import Count from './components/Count';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';

class App extends Component {
  render(){ 
    return (
    <div className="App">
      <ParentComponent />
    </div>
  );
}
}
export default App;
