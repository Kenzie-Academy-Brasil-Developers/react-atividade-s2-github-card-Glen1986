import Cards from './components/Card/Card';
import './App.css';
import { useState, useEffect } from 'react';

function App() {
const [ repos, setRepos ] = useState("");
const [ users, setUsers] = useState("");
const [ valor, setValor] = useState("");
const [ myValor, setMyValor ] = useState({})

  useEffect(()=>{

    //fetch(`https://api.github.com/repos/facebook/react-native`)
    fetch(`https://api.github.com/repos/${valor}`)
      .then((response) => response.json())
      .then((response) => setMyValor(response))
      .catch((error) => console.log( error ))
  console.log(myValor)
  },[valor])
//  console.log(valor)

  return (
    <div className="App">
        <Cards
          repos={repos}
          setRepos = {setRepos}
          users={users}
          setUsers = {setUsers}
          valor = {valor}
          setValor= {setValor}
          myValor = {myValor}
        ></Cards>
      
    </div>
  );
}

export default App;
