import Cards from './components/Card/Card';
import './App.css';
import { useState, useEffect } from 'react';

function App({inValue}) {
const [ repos, setRepos ] = useState("");
const [ users, setUsers] = useState("");
const [ valor, setValor] = useState("");
  useEffect(()=>{

    fetch(`https://api.github.com/repos/facebook/react-native`)
     // .then((response) => response.json())
      .then((response) => console.log(response))
      .catch((error) => console.log( error ))
  },[])

  return (
    <div className="App">
        <Cards
          repos={repos}
          setRepos = {setRepos}
          users={users}
          setUsers = {setUsers}
          valor = {valor}
          setValor= {setValor}
        ></Cards>
      
    </div>
  );
}

export default App;
