import React, { Component } from "react";
import CreateQuestion from "./CreateQuestion";
import CreateAnswer from "./CreateAnswer";

import './EditQuestionPage.css';

export default class EditQuestionPage extends Component {

    state = {
        ch1: 'Choice 1' ,
        ch2: 'Choice 2' , 
        ch3: 'Choice 3' ,
        ch4: 'Choice 4' 
    }

  render() {
    return (
      <div className="container">

        <div className="eqp container">
        <CreateQuestion />

        <CreateAnswer text = {this.state.ch1} />
        <CreateAnswer text = {this.state.ch2}/>
        <CreateAnswer text = {this.state.ch3}/>
        <CreateAnswer text = {this.state.ch4}/>
        </div>

 
      </div>
    );
  }
}
