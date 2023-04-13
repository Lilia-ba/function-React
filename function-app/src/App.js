import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react'
import Colorbox from './Components/colorbox';
import InputColor from './Components/input-color/input-color';
import FullName from './Components/full-name/full-name';
import Toupper from './Components/toUppercase/toUppercase';
import Compon5 from './Components/compon5 /compon5';
import WordLength from './Components/countletters/countLetters';

function App() {

  const [title, setTitle] = useState("");
  const [data, setData] = useState();

  useEffect (() => {
  console.log({title})
  fetch(`https://corona-api.com/countries`)
  .then(stream => stream.json())
  .then(results => setData(results.data));
 }, []);

  let confirmed = "";
  let name = "";
  if(data !==undefined) {
    confirmed = data.latest_data.confirmed;
    name= name.data
  }
  const ei = "blabla";
  

 
  return (
    <div className="App">
      <Colorbox css="red"  width={"200px"} height={"200px"} />
      <Colorbox css="yellow"   width={"100px"}   height={"100px"}/>
       <InputColor />
       <FullName />
       <Toupper />
       <Compon5 />
       <WordLength />
    </div>
  );
}

export default App;
