import Cards from './components/Card/Card';
import './App.css';
import { useState, useEffect } from 'react';

function App() {
const [ repos, setRepos ] = useState();
  useEffect(()=>{
    fetch('https://docs.github.com/en/rest/reference/repos#get-a-repository')
      .then((response) => response.json())
      .then((response) => setRepos([response]))
      .catch((error) => console.log( error ))
  },[])

  return (
    <div className="App">
        <Cards
        repos={repos}
        setRepos = {setRepos}></Cards>
    </div>
  );
}

export default App;
