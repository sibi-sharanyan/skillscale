import React, { Component } from "react";
import CreateQuestion from "./CreateQuestion";
import CreateAnswer from "./CreateAnswer";

import './EditQuestionPage.css';

export default class EditQuestionPage extends Component {


  //state is initialized with default values if new question is created. If existing question is edited , the values are taken from database.
    state = {
        ch1: 'Choice 1' ,
        ch2: 'Choice 2' , 
        ch3: 'Choice 3' ,
        ch4: 'Choice 4' ,
        qn: 'Click the edit button to start editing the section.'
    }

updateParent = ( text , chno) => {

  if(chno === 'qno') return this.setState({qn: text});
  this.setState({[chno] : text});

}

onSubmit = () => {

  //write logic to update question in database

  console.log(this.state.ch1 , this.state.ch2 , this.state.ch3 , this.state.ch4 , this.state.qn);
}


  render() {
    return (
      <div className="eqp container-main">

        <div className="eqp container">
        <CreateQuestion text = {this.state.qn}  updateParent = {this.updateParent}/>

        <CreateAnswer text = {this.state.ch1} updateParent = {this.updateParent} chno = "ch1" />
        <CreateAnswer text = {this.state.ch2} updateParent = {this.updateParent}  chno = "ch2" />
        <CreateAnswer text = {this.state.ch3} updateParent = {this.updateParent}  chno = "ch3" />
        <CreateAnswer text = {this.state.ch4} updateParent = {this.updateParent}  chno = "ch4" />

<div className="eqp container-button">
<button className = "eqp button" onClick = {this.onSubmit}> Submit </button>

</div>

        </div>

       
      </div>
    );
  }
}
