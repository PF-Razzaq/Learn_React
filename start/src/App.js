import logo from "./logo.svg";
import "./App.css";
import { Component, Fragment } from "react";
import MyCom from "./components/Greet";
import Welcome from "./components/Welcome";
import Hello from "./components/hello";
import Message from "./components/Message";
import Count from "./components/Count";
import FunctionClick from "./components/FunctionClick";
import ClassClick from "./components/ClassClick";
import EventBind from "./components/EventBind";
import ParentComponent from "./components/ParentComponent";
import UserGreeting from "./components/UserGreeting";
import NameList from "./components/NameList";
import StyleSheet from "./components/StyleSheet";
import "./AppStyle.css";
import styles from "./AppStyle.module.css";
import Form from "./components/form";
import LifeCycleA from "./components/LifeCycleA";
import FragmentDemo from "./components/FragmentDemo";
import Table from "./components/Table";

class App extends Component {
  render() {
    return (
      <div className="App">
        <FragmentDemo />
        <Table />
      </div>
    );
  }
}
export default App;
