import React , {useState} from "react";
import axios from 'axios';
import Cookies from 'js-cookie';

function onSubmit(email , password) {


  if(email === '' || password === '') return alert('Fill it');

  axios.post( "http://localhost:8000/users/login", {
 
    email , password
  }).then((res) => {
    Cookies.set('token' , res['headers']['x-auth']);
    console.log(res['headers']['x-auth']);
  }).catch((e) => {
    alert(e);
  })

}




function App() {

  const [email, setEmail] = useState('');
const [password, setPassword] = useState('');


  return (
    <div className="App">
      <div className="inputbox">
        <p className="mid-text">Email: </p>
        <input
          value={email}
          onChange={e => setEmail(e.target.value)}
          type="text"
          
        />
      </div>

      <div className="inputbox">
        <p className="mid-text">Password: </p>
        <input
          value={password}
          onChange={e => setPassword(e.target.value)}
          type="password"
         

        />
      </div>


<button onClick = { () => onSubmit(email , password)} >Submit</button>

    </div>
  );
}

export default App;
