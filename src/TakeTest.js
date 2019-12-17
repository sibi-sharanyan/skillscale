import React, { Component } from 'react';
import './TakeTest.css';

export default class TakeTest extends Component {

state = {
    questions: [{
        qn: 'Question 1' ,
        choices: ['ch11111111111111111111' , 'ch2aaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa' , 'ch3' , 'ch4']
    },
    {
        qn: 'Question 2' ,
        choices: ['ch1' , 'ch2' , 'ch3' , 'ch4']
    },
    {
        qn: 'Question 3' ,
        choices: ['ch1' , 'ch2' , 'ch3' , 'ch4']
    },{
        qn: 'Question 4' ,
        choices: ['ch1' , 'ch2' , 'ch3' , 'ch4']
    }
] ,
qno: 0
}
    

    render() {
        return (
            <div className = "container tt">

<div className="btn-group tt">
{this.state.questions.map((qn , index) => {
return <button onClick = {() => this.setState({qno: index})}>{index + 1}</button>;
})}


</div>


    <div className="question tt">{this.state.questions[this.state.qno].qn}</div>

<div className="sd tt">

{this.state.qno !== 0 ? <button onClick = {() => this.setState({qno: this.state.qno - 1})}>Prev</button> : <button style = {{visibility: 'hidden'}} onClick = {() => this.setState({qno: this.state.qno - 1})}>Prev</button> }


<div className="choice-grp tt">

{
    this.state.questions[this.state.qno].choices.map((ch) => {
    return <div className="choice tt">{ch}</div>
    })
}

</div>


{this.state.qno !== this.state.questions.length - 1 ? <button onClick = {() => this.setState({qno: this.state.qno + 1})}>Next</button> : <button style = {{visibility: 'hidden'}} onClick = {() => this.setState({qno: this.state.qno + 1})}>Next</button> }



</div>


 



            </div>
        )
    }
}
